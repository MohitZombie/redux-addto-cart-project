import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State';
import Mock from './MOCK_DATA.json';
import { useSelector } from 'react-redux/es/exports';
import { REMOVE , DEL} from '../State/action-creator';

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney, ADD } = bindActionCreators(actionCreators, dispatch);


    const [itemprice,setitemprice] = useState(0);

    const getdata = useSelector(state => state.cartreducer.carts);
    //   console.log(getdata)

  
    let amount = useSelector(state => state.amount);
//   console.log(amount)
// const [amount,setamount] = useState(0);

    const send = (e) => {
        // console.log(e)
        dispatch(ADD(e))
    }


    const dlt = (id) => {
        //     console.log(id)
        dispatch(DEL(id))
    }


    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    const total = ()=>{
        let itemprice = 0;
        getdata.map((ele,k)=>{
            itemprice = ele.itemprice * ele.qnty + itemprice
        });
        setitemprice(itemprice);
    };

    useEffect(()=>{
        total();
    },[total])




    return (
        <>
            <div>
                <h1>{amount}</h1>
                <h2>Depositr/Withdraw Money</h2>
                <button className="btn" onClick={() => { withdrawMoney(100) }}>-</button>
                Mini bank
                <button className="btn" onClick={() => { depositMoney(100) }}>+</button>
            </div>
            <div>
                <h1>Oder Detail</h1>
                <p>Total Iteam={getdata.length}</p>
                <p>Total :₹ {itemprice}</p>
                <button className='btn'>Pay Now</button>
            </div>

            {getdata.length ? <div>
                {getdata.map((j) => {
                    return (
                        <div>
                            <p> <strong>Game name</strong> {j.titel}</p>
                            <p> <strong>itemprice :</strong>  ₹{j.itemprice}</p>
                            <p><strong>Quantity :</strong> {j.qnty}</p>
                            <p> <strong>Total</strong>  :₹  {j.itemprice * j.qnty}</p>
                            <div className='mt-2 d-flex justify-content-between align-items-center' style={{ width: 70, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                <span style={{ fontSize: 24 }} onClick={j.qnty <= 1 ? () => dlt(j.id) : () => remove(j)}>-</span>
                                <span style={{ fontSize: 22 }}>{j.qnty}</span>
                                <span style={{ fontSize: 24 }} onClick={() => send(j)} >+</span>

                            </div>
                        </div>
                    )
                })}
            </div> :
                <div>
                    <h3>Order kar lodu</h3>
                </div>
            }
            <div className="container my-4">
                <div className="Main">
                    <div className="row ">
                        {Mock.map((w) => {
                            return (
                                <div className="col md-4">
                                    <div className="card mx-2 mt-4 " style={{ width: "18rem", border: "none" }}>
                                        <img src={w.imgs} style={{ height: "16rem" }} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{w.titel}</h5>
                                            <p className="card-text"> BUy now to enjoy</p>
                                            <p className="item-itemprice">itemprice:₹  {w.itemprice}</p>
                                            <button className="btn btn-primary col-lg-12" onClick={() => send(w)} >ADD to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
