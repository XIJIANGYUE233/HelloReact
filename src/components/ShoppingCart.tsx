import React from 'react';
import styles from './ShoppingCart.module.css'
import {FiShoppingCart} from "react-icons/fi"

interface Props {

}

interface State {
    isOpen: Boolean;
}

class ShoopingCart extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        // 方法二 bind绑定this
        // this.handleclick=this.handleclick.bind(this);
    }
    //方法一 箭头函数绑定this
    // handleclick=(e)=>{}
    handleclick= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {   
        console.log('e.target:',e.target) //target描述事件发生的元素
        console.log('e.currentTarget:',e.currentTarget) // currentTarget描述事件处理绑定的元素
        if((e.target as HTMLElement).nodeName ==="SPAN") 
        { 
        this.setState({isOpen:!this.state.isOpen}); 
        } 
    }

    render() {
        return (
            <div className={styles.cartContainer}>
                <button 
                    className={styles.button}
                    onClick={this.handleclick}
                > 
                    <FiShoppingCart></FiShoppingCart>
                  <span> 购物车 2 (件)</span> 
                </button>
                <div
                    className={styles.cartDropDown}
                    style={{
                        display: this.state.isOpen ? "block" : "none"
                    }}
                >
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    } 
}

export default ShoopingCart;