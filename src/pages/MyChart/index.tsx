import {listMyChartByPageUsingPost} from "@/services/autoBi/chartController";
import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";
import {useModel} from "@@/plugin-model";
import {Avatar,  Card,  List, message,  Result} from "antd";


const MyChart: React.FC = () => {
  const initSearchParams = {
    current:1,
    pageSize:4,
    sortField:'createTime',
    sortOrder:'desc'
  }
  const [searchParams,setSearchParams] =useState<API.ChartQueryRequest>({...initSearchParams})
  const  [chartList,setChartList] = useState<API.Chart[]>()
  const  [total ,setTotal] = useState<number>(0);
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState ?? {}

  const loadData =async () => {
    try {
      const res = await listMyChartByPageUsingPost(searchParams);
      if (res.data){
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
      }else {
        // message.error('获取我的图表失败');
      }
    }catch (e:any) {
      // message.error('获取我的图表失败'+e.message);
    }
  }

  useEffect(() => {
    loadData();
  } , [searchParams]);

  return (
    <div className="my-chart">
      <List
        grid={{ gutter: 10, column: 2 }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page,pageSize) => {
            setSearchParams({
              ...searchParams,
              current:page,
              pageSize
            })
            console.log(page);
          },
          current:searchParams.current,
          pageSize:searchParams.pageSize,
          total:total
        }}
        dataSource={chartList}
        footer={
          <div>
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.id}
          >
            <Card style={{width:'100%'}}>
              <List.Item.Meta
                avatar={<Avatar src={currentUser && currentUser?.userAvatar}/>}
                title={item.name ? item.name : ''+undefined}
                description={item.chartType ?`图表类型： `+item.chartType :undefined}
              />
              <>
                {
                  item.status === 'successed' &&
                  <>
                    <div style={{marginBottom:16}}>
                      <p> {`分析目标： `+item.goal}</p>
                      <ReactECharts option={item.genChart && JSON.parse(item.genChart)}/>
                    </div>
                  </>
                }
                {
                  item.status === 'failed' &&
                  <>
                    <Result
                      status="error"
                      title="图表生成失败！"
                      subTitle={item.execMessage}
                    />
                  </>
                }
                {
                  item.status === 'running' &&
                  <>
                    <Result
                      title="正在生成，请刷新"
                      subTitle={item.execMessage}
                    />
                  </>
                }
              </>
              <div>
                <p> {`分析结论： `+item.genResult?.replace(/^{|}$/g, '')}</p>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
export default MyChart;
