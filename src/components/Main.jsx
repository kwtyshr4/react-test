import React from 'react';
import Lesson from './Lesson';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: 'HTML',
        image: img1,
        introduction: 'Webサイトの文書構造を作るための言語',
      },
      {
        name: 'CSS',
        image: img2,
        introduction: 'Webサイトの見た目を装飾する言語',
      },
      {
        name: 'JavaScript',
        image: img3,
        introduction: 'フロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語',
      },
      {
        name: 'React',
        image: img4,
        introduction: 'HTMLのようにサイトの見た目をつくることができるJavaScriptのライブラリ',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>サンプルページ</h2>
          </div>
          <div className='lesson-container'>
            <h3>使用した言語</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
