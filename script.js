
let btns = document.querySelectorAll('button[data-target]')
let scenes = document.querySelectorAll('.scene')
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        let nextScene = btn.getAttribute('data-target');
        if (nextScene == "random") { //Випадковий вибір сцени(використане тільки один раз)
            let rand_num = Math.floor(Math.random() * 2);
            nextSceneList = ['scene4a', 'scene4b'];
            nextScene = nextSceneList[rand_num];

        }
        if( nextScene == 'scene11a') { //Запуск модального віконця після проходження основної лінії квесту
            setTimeout(function(){
                Swal.fire({
                    title: "Ви пройшли квест!",
                    icon: "success",
                    draggable: true
                  });
            }, 3000)
        }
        scenes.forEach(function(scene){
            scene.classList.remove('active')
        })
        document.querySelector('#' +nextScene).classList.add('active')
    })
})
let scene1 = document.querySelector('#scene1') 
let secret_img = document.querySelector('.img-fantasy2')
secret_img.addEventListener('click', function(){
     Swal.fire({
                    title: "Ви знайшли секретну пораду! Краще погоджуйтесь, буде цікавіше.",
                    icon: "success",
                    draggable: true
                  });
})
