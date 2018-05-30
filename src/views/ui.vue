<style>
  .ui .right{
    position: relative;
  }
  #pp{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
  }
  .ui .num-table{
    position:relative;
    border:1px solid #fff;
    margin:50px;
    transition: 1s;
  }
  .ui .num-table span{
    float:left;
    width:30px;
    height:30px;
    background:mediumspringgreen;
    color:#fff;
    text-align: center;
    line-height:30px;
    border:1px solid #fff;
  }
  .ui .num-table div:hover span{
    background: #00b76c;
  }
  .ui .num-table span.active{
    background:#ededed;
  }
  .ui .num-table span.cur {
    background: #dddddd;
  }
  .ui .num-table span.err{
    color:red;
  }
  .ui .num-table span.cur-col{
    background: #00b76c;
  }

 .ui .num-keyboard {
    position:absolute;
    top:0;
    left:0;
    background:#fff;
  }
  .ui .num-keyboard ul {
    width:96px;
    height:94px;
    border:1px solid green;

  }
  .ui .num-keyboard ul li{
    float:left;
    width:30px;
    height:30px;
    line-height:30px;
    text-align: center;
    color:green;
    border:1px solid green;
  }
  .ui .shake{
    transform: rotate(60deg);

  }

</style>
<template>
  <div class="ui control">
    <div class="left"></div>
    <div class="right">
        <div class="num-table" :class="{'shake':isShake}">
           <div class="clear" v-for="row, index in allNum" @mouseleave="hoverCol=-1">
               <span v-for="sbRow, sbIndex in row" :class="{
                 'active':sbRow==='',
                 'cur':curRow===index&&curCol===sbIndex,
                 'cur-col':hoverCol===sbIndex,
                 'err':(optionNow.x===index&&optionNow.y===sbIndex)||(optionNowInRow.x===index&&optionNowInRow.y===sbIndex)||(optionNowInCol.x===index&&optionNowInCol.y===sbIndex)
               }" @click="showCheck(index,sbIndex)" @mouseenter="hoverCol=sbIndex">
                   {{sbRow}}
               </span>
           </div>
           <div class="num-keyboard" :style="{'top':(curRow+1)*32+'px','left':(curCol+1)*32+'px'}" v-show="checkShow">
             <ul class="clear">
               <li @click="inputText(1)">1</li>
               <li @click="inputText(2)">2</li>
               <li @click="inputText(3)">3</li>
               <li @click="inputText(4)">4</li>
               <li @click="inputText(5)">5</li>
               <li @click="inputText(6)">6</li>
               <li @click="inputText(7)">7</li>
               <li @click="inputText(8)">8</li>
               <li @click="inputText(9)">9</li>
             </ul>
           </div>
        </div>
    </div>
  </div>
</template>
<script>
  import menuList from '../components/menu'
  import popUp from '../components/pop-up'
  let isBase= (it) => {
    return it===null || (typeof it!=='object'&&typeof it!=='arr');

  }

  let clone= (it) =>{
    if(isBase(it)){
      return it;
    }
    let result=Array.isArray(it)?[]:{};
    for(let i in it){
      result[i]=clone(it[i])
    }
    return result;

  }

  let randomText = () =>{
    let randomIndex=0;
    let randomIndexAfter=0;
    randomIndex=Math.floor(Math.random()*9);
    let randomDo= ()=>{
      randomIndexAfter=Math.floor(Math.random()*9);
      if(randomIndex===randomIndexAfter){
        randomDo();
      }
    }
    randomDo();

    return [randomIndex,randomIndexAfter]

  }

//  let arr=[1,2,3,4,5,6,7,8,9]
//  let all=[]
//  for(let i in arr){
//    let shift=arr.shift()
//    arr.push(shift)
//    all.push(clone(arr))
//  }

  let allNum=[
    [1,2,3,4,5,6,7,8,9],
    [2,3,4,5,6,7,8,9,1],
    [3,4,5,6,7,8,9,1,2],
    [4,5,6,7,8,9,1,2,3],
    [5,6,7,8,9,1,2,3,4],
    [6,7,8,9,1,2,3,4,5],
    [7,8,9,1,2,3,4,5,6],
    [8,9,1,2,3,4,5,6,7],
    [9,1,2,3,4,5,6,7,8]
  ];
  allNum=allNum.sort((n1,n2)=>{return Math.random() - 0.5});

  let randomArr=[];
  let nowValue=0;
  for(let i=0;i<9;i++){
    randomArr=clone(randomText());
    for(let j=0;j<=allNum.length-1;j++){
      nowValue=allNum[j][randomArr[0]];
      allNum[j][randomArr[0]]=allNum[j][randomArr[1]];
      allNum[j][randomArr[1]] = nowValue;
    }

  }

  let rowText='';
  let arrText=[];
  for (let i=0;i<9;i++){
    rowText="";
    for(let j=0;j<9;j++){
      rowText+=`${i}-${j},`
    }
    arrText.push(rowText.substr(0,rowText.length-1))
  }
  let nowItem=[];
  let _option;
  let nowOption=[];

  for(let i=0;i<9;i++){
    nowItem=arrText[i].split(',');
    nowOption=[];
    for(let j=0;j<3;j++){
      _option=Math.floor(Math.random()*nowItem.length);
      nowOption=nowItem.splice(_option,1)[0].split("-");
      allNum[nowOption[0]][nowOption[1]]="";
    }
  }

  export default {
    data () {
      return {
        msg:'',
        allNum,
        checkShow:false,
        hoverCol:-1,
        curRow:-1,
        curCol:-1,
        optionNow:{},
        optionNowInRow:{},
        optionNowInCol:{},
        isShake:false,
        isErr:false
      }
    },
    components:{
      menuList,
      popUp
    },
    methods:{
      showCheck (index,sbIndex) {
        if(this.allNum[index][sbIndex]!==''){
          return false;
        }

        if(index===this.curRow&&sbIndex===this.curCol){
          this.checkShow=false;
          this.curRow=-1;
          this.curCol=-1;
        }else{
          this.checkShow=true;
          this.curRow=index;
          this.curCol=sbIndex;
        }

      },
      inputText (num) {
         let _row=this.curRow;
         let _col=this.curCol;
         this.curRow=-1;
         this.curCol=-1;
         this.isErr=false;
         this.optionNow={
           x:-1,
           y:-1
         };
         this.optionNowInRow={
           x:-1,
           y:-1
         };
         this.optionNowInCol={
           x:-1,
           y:-1
         };
         this.allNum[_row][_col]=num;
         this.checkShow=false;
         let rowCheck=clone(this.allNum[_row]);
         this.checkShow=false;
         for(let i=0;i<=rowCheck.length-1;i++){
           if(num===rowCheck[i]&&_col!==i){
             this.isErr=true;
             this.isShake=true;
             this.optionNow={
               x:_row,
               y:_col,
             }
             this.optionNowInRow={
               x:_row,
               y:i
             }

           }
         }

         let colCheck=[];
         for(let i=0;i<=this.allNum.length-1;i++){
           colCheck.push(this.allNum[i][_col]);
         }

         for(let i=0;i<=colCheck.length-1;i++){
           if(num===colCheck[i]&&_row!==i){
             this.isErr=true;
             this.isShake=true;
             this.optionNowInCol={
               x:i,
               y:_col
             }
           }
         }

        if(this.isErr){
           setTimeout(()=>{
             this.isShake=false;
             this.allNum[_row][_col]='';
             this.optionNow={
               x:-1,
               y:-1
             }
             this.optionNowInRow={
               x:-1,
               y:-1
             }
             this.optionNowInCol={
               x:-1,
               y:-1
             }
           },1000);
          return false;
        }

        rowCheck=rowCheck.filter(item => item!=='');
        if(rowCheck.length!==9){
          return false;
        }

        for(let i=0;i<=this.allNum.length;i++){
          coloCheck=[...new Set(this.allNum[i])];
          coloCheck=coloCheck.filter(item => item!=='')
          if(coloCheck.length!==9){
            return false;
          }
        }

        alert("挑战完成")

      }
    },
    mounted () {

    }
  }
</script>
