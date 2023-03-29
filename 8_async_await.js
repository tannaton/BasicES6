// const f = () => {

//         console.log("กำลังโหลดข้อมูล...")

//         setTimeout(()=>{
//             console.log("Hello")
//         }, 3000)

//         console.log("โหลดเสร็จแล้วจร้า")    
// }

// f()

const f = async() => {

    const promise = new Promise((resolve, reject) => {
        
        console.log("กำลังโหลดข้อมูล...")
        console.log("do any thing...")

        setTimeout(()=>{
            resolve("โหลดเสร็จแล้วจร้า")
        }, 3000)

    })

    const result = await promise // มันจะรอจนครบเวลาที่กำหนดจึงคืนค่าออกมาก
    console.log(result)
    
}

f()


