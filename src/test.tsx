function Test(props:{name:string, handelClose:()=>void}) {
    return ( 
        <div>
            <h1>Hello { props.name }</h1>
            <button onClick={props.handelClose} >Close</button>
        </div>
    );
}

export default Test
