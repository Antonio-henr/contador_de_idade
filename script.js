const botao = document.querySelector('#botao')
const diasr = document.querySelector('#dias_r')
const mesesr = document.querySelector('#meses_r')
const anosr = document.querySelector('#anos_r')

const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')

const data = new Date();
const data_hj= data.toLocaleDateString()

var data_ins=""
var resultado=0
var ano_res=0
var mes_res=0
var dia_res=0

botao.addEventListener('click',()=>{
    if (dia.value>31 || dia.value<1 || mes.value>31 || mes.value<1 || ano.value<1) 
    {
        alert('Por favor, coloque uma data real')    
    }else{
        data_ins=mes.value+`-`+dia.value+`-`+ano.value

        
        resultado=new Date(data_hj)-new Date(data_ins)
        resultado=resultado/(60*1000)
        
        if(resultado>=525600){
            ano_res=parseInt(resultado/525600)
            resultado=resultado%525600
        }
        if(resultado>=43200){
            mes_res=parseInt(resultado/43200)
            resultado=resultado%43200
        }
        if(resultado>=1440){
            dia_res=parseInt(resultado/1440)
        }

     
        dia.value=""
        mes.value=""
        ano.value=""
        setTimeout(() => {
            anosr.innerHTML=ano_res
            setTimeout(() => {
                mesesr.innerHTML=mes_res
                setTimeout(() => {
                    diasr.innerHTML=dia_res
                }, 1000);
            }, 1000);
        }, 500);
        
        
        
    }
})

