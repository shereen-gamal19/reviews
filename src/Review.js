import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  //1  here we will go through our people array and we will start with index = 0 
  const [index , setIndex] = useState(0)
  console.log(people)
  // 2 here we wil display the information of the first item in our array  
  const {name , job , image , text} = people[index]

  //here when we set the functionality of ecah button then we found that when we press on the next our previous button then when we wa
  //to reach out the end of the array we got an error so  we will put a condition for this problem
  // 6 the condition
  const checknumber = (number)=>{
    if(number> people.length-1 ) {
        return 0 ;
    }
    if( number < 0){
        return people.length;
    
    }
    return number ;
    

  }  
  // 6 we will put the functionality of the randomitem button
  //كمان احنا هنا هنستخدم math.rondom
  // ولكن math.random its value between 0 ,1 in decimal form 
  // فاحنا هنضربها في people.length
  // والقيمه اللي هتطلع هتكون عششريه فااحنا هنقربها باستخدام math.floor
  // كمان نتيجه الرندم او العشواٍيه ممكن ال اندكس يتكرر فاحما هنجط شرط ان لو الرندوم رقمه بيساوي رقم الاندكس اللي موجود يبقي نزود علي الاندكس 1
  // كمان واحنا بنحدث ال state ,setIndex
  // هناحناج نمرر الرقم اللي طلع علي checknumber function

  const randomitem = () =>{

    let randomnumber = Math.floor(Math.random() * people.length)
    if (randomnumber === index){
      randomnumber = index + 1
    }
    console.log(randomnumber)

    setIndex(checknumber(randomnumber))

  }


  // 5 the functionality of each button
  const prevbtn = ()=>{
    setIndex ((index)=>{
      let newitem = index + 1 
      return checknumber(newitem)  


    })
  }
  const nextbtn=()=>{
    setIndex((index)=>{
      let newitem = index + 1 

      return checknumber(newitem)  


    })
  }
// this is another option for functionality of both buttons
  //const prevbtn = ()=>{
    //setIndex ( index + 1)
      
      
  //}
  //const nextbtn=()=>{
    //setIndex ( index - 1)

  //}



  return( // 3 here we will set all info of the first item in our array  
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt ={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'> {job} </p>
      <p className='info'> {text} </p>
{/* 4 here we will set our btn and their functionality */}
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevbtn}>
          <FaChevronLeft />
        </button>
        <button className='next-btn'onClick={nextbtn}>
          <FaChevronRight />
        </button>          
      </div>
      <button className='random-btn'onClick={randomitem}>surprise me</button>



      
    </article>
  )
};

export default Review
