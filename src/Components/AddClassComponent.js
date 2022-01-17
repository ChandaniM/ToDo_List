import '../Stylesheets/styleadd.css';
import React,{Component} from 'react';
class AddClasscomponent extends Component{
	constructor(){
		super();
		this.state={
			isVisible:false,
		}
		this.addInput=this.addInput.bind(this);
	}
	addInput(){
		this.setState({
			isVisible:true,
		})
	}
	render(){
		return(
			<div>
				<div className="search_container">
					<h2>My To Do</h2>
					<input type="text" placeholder="Enter Text" className="input_search"></input>
					<button className="add" onClick={this.addInput}>Add</button>
				</div>
				{
					this.state.isVisible?(
						<div>Component</div>
					):''
				}
			</div>
		);
	
	}
}


export default AddClasscomponent;