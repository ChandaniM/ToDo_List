import '../Stylesheets/styleadd.css';
import React,{useState,createRef} from 'react';
function Addcomponent(){
	// const [isVisible,setVisible]=useState(false);
	// function addInput(){
	// 	setVisible(true);
	// }
	// const [count,setCount]=useState(0);
	const [text,settext]=useState("");
	const [componentArray,addComponent]=useState([]);
	const taskRef=createRef();
	const addTask=()=>{
		if(text!=""){
				let obj={
					id:componentArray.length,
					task:text,
					checked:false
				}
				// array.push(value);
				//push
				addComponent(componentArray =>[...componentArray, obj]);
				settext('');	
		}
	}
	const deleteTask=(id)=>{
		let arr=[...componentArray];
		//splice(index,kitna nikale,kitna add kare)
		arr.splice(id,1);
		console.log(arr)
		addComponent(componentArray=>[...arr]);
	}
	const completeTask=(e,index)=>{
		let input=[...componentArray];
		let saveitem=input[index];

		saveitem["checked"]=!saveitem["checked"];
		// console.log(componentArray[index].checked)
		addComponent(componentArray=>[...input]);
		if(componentArray[index].checked){
			taskRef.current.style.textDecoration="line-through";
		}else{
			taskRef.current.style.textDecoration="none";
		}
	}
	//
	return(
			<div>
				<div className="search_container">
					<h2>ToDo List</h2>
					<div className="input_container">
						<input type="text" value={text} placeholder="Enter Text" className="input_search" onInput={(e)=>settext(e.target.value)}></input>
					{/*<button className="add" onClick={addInput}>Add</button>*/}
						<button className="add" onClick={addTask}>Add</button>
					{console.log(text)}
					</div>
				</div>
				{
					componentArray.map((element,index)=>(

						<div className="Outputcontainer" key={element.id}>
							<div className="out_box">
								<input type="checkbox"  onClick={(event)=>completeTask(event,index)}/>
								<span className="textinput" ref={taskRef}>{element.task}</span>
							</div>
								<button className="Cancelbutton" onClick={()=>deleteTask(index)}>Cancel</button>
							
						</div>	
					))
				}
			</div>
	);

}



export default Addcomponent;