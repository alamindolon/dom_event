

        function makeRed()
        {
            document.body.style.backgroundColor = 'red';
        }

        const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.onclick = function(){
            document.body.style.backgroundColor = 'green';
        }

        const makepinkButton = document.getElementById('make-pink');
        makepinkButton.addEventListener('click', makePink);

        function makePink()
        {
            document.body.style.backgroundColor = 'pink';
        }

        const makeBlackButton = document.getElementById('make-black');
        makeBlackButton.addEventListener('click',function(){
            document.body.style.backgroundColor = 'black';
            //document.body.style.color = 'white';
            document.body.style.color = 'red';

        })


        document.getElementById('make-orange').addEventListener('click',function(){
            document.body.style.backgroundColor = 'orange';
        })