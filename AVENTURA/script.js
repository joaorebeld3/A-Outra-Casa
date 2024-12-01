const avanca = document.querySelectorAll('.btn-proximo');


avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo'); 
        
       
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        
        
        atual.classList.remove('ativo');
        
        
        const proximoPasso = document.getElementById(proximoPassoId);
        
        
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
        
        
        if (proximoPassoId === 'passo-11') {
            ativarFlash();
        }
    });
});


function ativarFlash() {
    const flash = document.getElementById('flash');
    
    
    flash.style.display = 'block';
    
   
    flash.classList.add('flash-anim');
    
   
    setTimeout(() => {
        flash.style.display = 'none';
        alert('A casa te pegou...');
    }, 3000); 
}


alert('Flash Warning');

