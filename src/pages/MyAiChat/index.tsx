import React, { useEffect, useState } from 'react';
import {Avatar, Button, Card, Flex, Input, List, message, Space} from 'antd';
import VirtualList from 'rc-virtual-list';
import TextArea from "antd/es/input/TextArea";
import {chatWithAiUsingPost} from "@/services/autoBi/chatController";
import {useModel} from "@@/plugin-model";
import {string} from "prop-types";
import {DownloadOutlined, RightSquareTwoTone} from "@ant-design/icons-svg";
import {RightSquareOutlined, SearchOutlined} from "@ant-design/icons";
import {SizeType} from "antd/es/config-provider/SizeContext";


interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const ContainerHeight = 550;
const App: React.FC = () => {
  let [messages, setMessages] = useState([
    {
      sseData: ['\n' +
      '您好！我是人工智能助手，很高兴为您提供帮助。请问有什么可以为您服务的？'],
    }
  ]);

  //文本域值状态管理
  const [TextAreaData, setTextAreaData] = useState('');
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log('Change:', e.target.value);
    setTextAreaData(e.target.value)

  };
  const handleClick = () => {
    chatWithAiUsingPost(TextAreaData)
    setMessages(prevMessages => [
      ...prevMessages,
      {
        sseData: []
      } // 新的对象，可以设置不同的 id 和 sseData 值
    ]);
  }

  //登录用户状态管理
  const {initialState} = useModel('@@initialState');
  const  robootAvatarUrl = 'https://gd-hbimg.huaban.com/134552db1240d48d1dfc4e18f28ed4b65d1aa62742a4-yyKHjL_fw236'

  useEffect(() => {
    //后端sse地址
    const  sseUrl ='http://localhost:8101/api/chat/sse';
    const eventSource = new EventSource(sseUrl); // 创建SSE连接
    // 定义处理消息的回调
    eventSource.onmessage = (event) => {
      console.log(JSON.parse(event.data).data)
      //解析ai模型对话数据
      const Data = (JSON.parse(event.data).data).replace(/\s/g, '');
      // 将新消息添加到状态中
      setMessages(  preData => {
       const lastMessage ={...preData[preData.length-1]} // 复制最后一个对象，确保不直接修改原来的对象
        lastMessage.sseData = [...lastMessage.sseData, Data];
        // 返回更新后的 messages 数组
        return [
          ...preData.slice(0, preData.length - 1),
          lastMessage // 添加修改后的对象
        ];
      })
    }
    // 连接时处理
    eventSource.onopen = (event) => {
      console.log('SSE connect open:');
    };
    // 错误处理
    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      // 在这里可以处理重连逻辑等
    };
    // 返回一个清除函数
    return () => {
      eventSource.close();
    };
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      messages
    }
  };

  return (
    <div>
      <Card  type="inner" title="对话">
        <List split={false}>
          <VirtualList
            data={messages}
            height={ContainerHeight}
            itemHeight={47}
            itemKey="email"
            onScroll={onScroll}
          >
            {(item: any) => (
              <List.Item
                key={item}
              >
                <List.Item.Meta
                  avatar={item && <Avatar src={robootAvatarUrl} />} // 只有在 item 存在时才渲染 Avatar 组件
                  title={item?.sseData}
                />
              </List.Item>
            )}
          </VirtualList>
          <List>
            <Space direction="vertical" size="middle" style={{ width: '100%' , display: 'flex' }}>
              <Space.Compact style={{ width: '100%' }}>
                <Flex vertical gap={32} style={{ width: '100%' , display: 'flex' }}>
                  <TextArea
                    onChange={onChange}
                    placeholder="你可以问我任何问题..."
                    style={{ height: 110, resize: 'none',position: 'relative'}}
                  />
                  <Button
                    size={size}
                    type="primary"
                    icon={<RightSquareOutlined />}
                    onClick={handleClick}
                    style={{
                      position: 'absolute', // 设置按钮绝对定位
                      bottom:10, // 距离父元素底部为0，即右下角位置
                      right: 10, // 距离父元素右边为0，确保对齐右下角
                      // 其他样式如大小、颜色等...
                    }}
                  >
                  </Button>
                </Flex>
              </Space.Compact>
            </Space>
          </List>
        </List>
      </Card>
    </div>

  );
};

export default App;
