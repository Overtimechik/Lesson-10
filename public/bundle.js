(async()=>{let e=await(await fetch("https://run.mocky.io/v3/20474e19-d951-427f-a1f4-51bb51495a79")).json();return[e.filter((e=>"female"===e.gender.toLowerCase())),e.filter((e=>"male"===e.gender.toLowerCase()))]})().then((e=>{console.log(e[0])})).catch((e=>{console.log(e)}));