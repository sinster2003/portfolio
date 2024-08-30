const code = 
`<pre style="width: fit-content">
    useEffect(() => {
        console.log("User has mounted");
        console.log("Hello I can see you 😉");
        setUserVisited(true);
        console.log("Have a nice day");
    }, []);
</pre>`

export default code;