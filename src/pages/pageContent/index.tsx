/*
 * @Author: fuzhenghao
 * @Date: 2021-09-29 09:29:29
 * @LastEditTime: 2021-10-14 17:17:20
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_frontEnd\src\pages\pageContent\index.tsx
 *
 */
import React, { Component } from 'react';
import {
  GithubOutlined,
  ZhihuOutlined,
  WechatOutlined,
  YoutubeOutlined,
  SketchOutlined,
  TagsOutlined,
  CalendarOutlined,
  RobotOutlined,
  ReadOutlined,
  BookOutlined,
  TagOutlined,
} from '@ant-design/icons';
import { HeaderLists } from '@/components/index';
import picture_1 from '../../assets/images/card_front.png';

import styles from './index.less';
import { history } from 'umi';

import { Carousel, Calendar } from 'antd';

export default class index extends Component {
  state = {
    local_menuListDetail: null,
  };

  onMouseOverHandle = (local_menuListDetail: string) => {
    console.log(local_menuListDetail);

    this.setState({
      local_menuListDetail,
    });
  };

  onMouseLeaveHandle = () => {
    this.setState({
      local_menuListDetail: null,
    });
  };

  check_article_detail = (article: { id: any }) => {
    history.push({
      pathname: `/articlePage/:${article.id}`,
      // query: {
      //   article: article.id,
      // },
    });
  };

  render() {
    const { local_menuListDetail } = this.state;
    const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
    function onChange(a, b, c) {
      console.log(a, b, c);
    }
    function onPanelChange(value, mode) {
      console.log(value, mode);
    }
    let headerLists_config = {
      headerLeftLists: [
        {
          color: 'pink',
          title: 'react',
          icon: <GithubOutlined style={{ fontSize: '16px', color: 'pink' }} />,
          childrenList: [],
        },
        {
          color: 'green',
          title: 'vue',
          icon: <GithubOutlined style={{ fontSize: '16px', color: 'green' }} />,
          childrenList: [],
        },
        {
          color: 'green',
          title: 'angular',
          icon: <GithubOutlined style={{ fontSize: '16px', color: 'green' }} />,
          childrenList: [],
        },
      ],
      headerRightLists: [
        {
          link: 'https://github.com/0polar-aurora0',
          title: 'Github',
          icon: <GithubOutlined style={{ fontSize: '16px', color: 'black' }} />,
        },
        {
          color: 'pink',
          link: 'https://github.com/0polar-aurora0',
          title: 'bilibili',
          icon: <YoutubeOutlined style={{ fontSize: '16px', color: 'pink' }} />,
        },
        {
          title: '掘金',
          color: 'blue',
          icon: <SketchOutlined style={{ fontSize: '16px', color: 'blue' }} />,
        },
        {
          title: '微信',
          color: 'green',
          icon: <WechatOutlined style={{ fontSize: '16px', color: 'green' }} />,
        },
        {
          title: '知乎',
          color: 'blue',
          icon: <ZhihuOutlined style={{ fontSize: '16px', color: 'blue' }} />,
        },
      ],
    };

    const articleList = [
      {
        id: 0,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        id: 1,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        id: 2,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        id: 3,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        id: 4,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
      {
        id: 5,
        title: 'js滚动效果实现',
        date: '1999-09-12',
        introduce: '这是一个关于js滚动效果实现的文章',
      },
    ];

    return (
      <div id="pageContent" className={styles.pageContent}>
        <HeaderLists {...headerLists_config} />

        <div className={styles.pageContent_content}>
          <div className={styles.content_conatiner}>
            <div className={styles.content_left}>
              <Carousel afterChange={onChange}>
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
                <img src={picture_1} alt="" />
              </Carousel>
              {articleList.map((article) => {
                return (
                  <div
                    onClick={this.check_article_detail.bind(this, article)}
                    className={styles.article}
                  >
                    <h3>{article.date}</h3>
                    <div className={styles.article_title}>
                      <div className={styles.article_title_icon}></div>
                      <h3>{article.title}</h3>
                    </div>
                    <div className={styles.article_introduce}>
                      {article.introduce}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.content_right}>
              <div className={styles.card}>
                <h3>
                  <RobotOutlined />
                  个人简介
                </h3>
                <div className={styles.introduce_area_lists}>
                  <div className={styles.introduce_area_list}>
                    <p>昵称</p>
                    <p>123456</p>
                  </div>
                  <div className={styles.introduce_area_list}>
                    <p>爱好</p>
                    <p>玩</p>
                  </div>
                  <div className={styles.introduce_area_list}>
                    <p>兴趣</p>
                    <p>吃</p>
                  </div>
                  <div className={styles.introduce_area_list}>
                    <p>擅长</p>
                    <p>睡</p>
                  </div>
                </div>
                <div className={styles.introduce_area_more}>
                  了解更多关于博主
                </div>
              </div>

              <div className={styles.card}>
                <h3>
                  <CalendarOutlined />
                  日历
                </h3>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
              <div className={styles.card}>
                <h3>
                  <BookOutlined />
                  随笔
                </h3>
              </div>

              <div className={styles.card}>
                <h3>
                  <TagsOutlined />
                  我的标签
                </h3>
                <div className={styles.myTag_area_lists}>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    做饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                  <div className={styles.myTag_area_list}>
                    <TagOutlined />
                    吃饭
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h3>
                  <ReadOutlined />
                  我的日记
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
