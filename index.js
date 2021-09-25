async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000)
    });

    console.log('befor await'); 
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*) block!

    console.log('after await'); 
  
    console.log(result); //완료
  }
  
  f();