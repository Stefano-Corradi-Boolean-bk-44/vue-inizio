

const app = new Vue({
  // qui si inserisce TUTTO il codice vue
  // dico a Vue dove deve puntare l'app
  el: '#app',
  // in data inserisco tutte le variabili che saranno delle proprietà di data
  data: {
    nome: 'Ugo de Ughi',
    messaggio: 'Buongiorno!',
    miaClasse: '',
    counter:0
  },
  methods:{
    funzioneEstesa: function(){
      console.log(this);
      // con this.[nome del mio data] leggo le variabili
    },
    // tipo di funzione migliore
    funzioneCompatta(){
      console.log(this);
    },
    arrowFunction : () =>{
      console.log(this);
    },
    coloraRosso(){
      this.miaClasse = 'rosso';
    },
    coloraBlu(){
      this.miaClasse = 'blu';
    },
    coloraClasse(classe){
      this.miaClasse = classe;
    },
    funzioneChiamataDaKeyUp(){
      ++this.counter;
      console.log(this.counter);
      if(this.counter >= 10){
        console.log('hai raggiunto 10 caratteri');
      }
    }
  }






})