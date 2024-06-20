import React from 'react';


const Footer: React.FC = () => {
  const defaultMessage = '啊啊啊啊啊啊啊啊啊啊啊啊';
  const currentYear = new  Date().getFullYear();
  // return (
  //   <DefaultFooter
  //     style={{
  //       background: 'none',
  //     }}
  //     copyright={`${currentYear} ${defaultMessage}`}
  //     links={[
  //       {
  //         key: 'Ant Design Pro',
  //         title: 'aaaa',
  //         href: 'https://pro.ant.design',
  //         blankTarget: true,
  //       },
  //       {
  //         key: 'github',
  //         title: <GithubOutlined />,
  //         href: 'https://github.com/ant-design/ant-design-pro',
  //         blankTarget: true,
  //       },
  //       {
  //         key: 'Ant Design',
  //         title: 'aaa',
  //         href: 'https://ant.design',
  //         blankTarget: true,
  //       },
  //     ]}
  //   />
  // );
};

export default Footer;
