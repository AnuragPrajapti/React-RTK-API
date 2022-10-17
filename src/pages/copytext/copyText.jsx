import React,{useState} from 'react'
import copy from "copy-to-clipboard";
import { Heading, Input1, Input2, Container, Button } from './copytextStyle'

const Clipboard = () => {
	const [copyText, setCopyText] = useState('');

	const handleCopyText = (e) => {
		if(e.target.value !==  null){
			setCopyText(e.target.value);
		}else{
			alert("please enter a value")
		}
	}
	
	const copyToClipboard = () => {
	copy(copyText);
	alert(`You have copied "${copyText}"`);
	}
	
	return (
	<div>
		<Heading>Copy Code Here</Heading>
		
		<Container>
		<Input1
			type="text"
			value={copyText}
				onChange={handleCopyText}
				placeholder='Enter the text you want to copy' />
	
		<Button className='btn btn-primary' onClick={copyToClipboard}>
			Copy to Clipboard
		</Button>
	
		<Input2
			type="text"
			placeholder='Enter the text you have copied' />
		</Container>
	
	</div>
	)
}

export default Clipboard;
