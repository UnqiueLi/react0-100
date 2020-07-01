let callback=[]
let state={number:0}
callback.push([(state)=>({number:state.number+1}),()=>{console.log(state)}])
callback.push([(state)=>({number:state.number+2}),()=>{console.log(state)}])
callback.push([(state)=>({number:state.number+3}),()=>{console.log(state)}])
let v
let fns=[]
let cb=callback.shift()
state=cb(state)
while((v=callback.shift())){
    let [cb,fn] = v
    let partialState = cb(state)
    for(let key in partialState){
        state[key]=partialState[key]
    }
    fns.push(fn)
}
fns.forEach(fn=>fn())