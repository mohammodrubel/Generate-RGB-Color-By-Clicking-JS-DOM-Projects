window.onload =()=>{
    main()
}

const main = ()=>{
    const root = document.getElementById('root')
    const btnClr = document.getElementById('btnClr')

        btnClr.addEventListener('click',function(){
            const bgColor = genarateColor()
            root.style.backgroundColor=bgColor
        })
}

function genarateColor (){
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

        return `rgb(${red}, ${green}, ${blue})`
}