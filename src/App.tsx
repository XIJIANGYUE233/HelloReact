import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/robots'
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart'
import { clear, count } from 'console';

interface Props {

}

interface State {
  robotGallery: any[],
  count: number;
}


//**函数式组件写法**
const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>()

  //默认情况每次渲染都调用一次 
  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true) 
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setRobotGallery(data);
        setLoading(false)
      }
    catch(e:any){
      setError(e.message);
    }
    };
    fetchData()
  },[])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' ></img>
        <h1>nb2022</h1>
      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>cliick</button>
      <span>count:{count}</span>
      <ShoppingCart />
      {(!error||error!=="")&&<div>网站出错 {error} </div>}
     {  !loading ? (    <div className={styles.robotList}>
      {robotGallery.map(r =>
        <Robot id={r.id} email={r.email} name={r.name} />
      )}
    </div>) :(
      <h2>loading 加载中</h2>
    )
  }
    </div>
  );
}
//**类组件写法**
// class App extends React.Component<Props, State> {

//   // * 生命周期第一个阶段 ： 初始化
//   // 构建函数constructor 初始化state
//   constructor(props) {
//     super(props);
//     this.state = {
//       robotGallery: [],
//       count:0
//     };
//   } 
// // componentDidMount函数   在组件创建好dom元素以后、挂载进页面的时候调用 初始化的时候调用一次
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => this.setState({ robotGallery: data }))
//   }


//   // * 生命周期第二阶段： 更新
//   // 在组件接收到一个新的 prop (更新后)时被调用。
//   // componentWillReceiveProps
//   // state getDerivedStateFromProps(nextProps, prevState){}
//   // shouldComponentUpdate(nextProps, nextState){
//   //   return nextState.some !== this.state.some
//   // }
//   // 组件更新后调用
//   componentDidUpdate(){}

//    // * 生命周期第三阶段： 销毁
//    // 组件销毁后调用，
//    // 可以当作析构函数 destructor 来使用
//   componentWillUnmount(){}

//   render() {
//     return (
//       <div className={styles.app}>
//         <div className={styles.appHeader}>
//           <img src={logo} className={styles.appLogo} alt='logo' ></img>
//           <h1>nb2022</h1>
//         </div>
//         <button onClick={()=>
//         {
//           //setState异步更新 同步执行  
//             this.setState((preState,preProps)=>
//             { 
//               return {count:preState.count+1}
//             },()=>{
//             console.log('count:',this.state.count)
//           });
//           this.setState((preState,preProps)=>
//           { 
//             return {count:preState.count+1}
//           },()=>{
//           console.log('count:',this.state.count)
//         });
//           // this.setState({count:this.state.count+1},()=>{
//           //   console.log('count:',this.state.count)
//           // });

//         }}>cliick</button>
//         <span>count:{this.state.count}</span>
//         <ShoppingCart />
//         <div className={styles.robotList}>
//           {this.state.robotGallery.map(r =>
//             <Robot id={r.id} email={r.email} name={r.name} />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
