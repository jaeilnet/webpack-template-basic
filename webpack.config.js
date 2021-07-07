const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  // parcel index.html 와 비슷함,
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry : './js/main.js',  //js 기준으로 함,

  // 결과물(번들)을 반환하는 설정
  
  output :{
    path : path.resolve(__dirname, 'dist'),  //절대경로
    filename: 'main.js',
    clean: true  // main.js 말고 다 지우기
  },

  module: {
    rules : [
      { 
        test: /\.s?css$/,  //정규표현식 scss, css 파일 읽기
        use: [ //순서중요함 (밑에서 위로 읽어들임)
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,  //js 확장자로 끝나는 파일
        use:[
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 설정
  plugins : [
    new HtmlPlugin({
      template: './index.html' //상대경로
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: 'static' }
    //   ]
    // })
  ],
  
  devServer: {
    host : 'localhost'
  }
}