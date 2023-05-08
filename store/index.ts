
export const state = () => ({
  lang: 'fa',
  mouseEffect: true as boolean,
});
export const mutations = {
  change(state:any){
    if(state.lang == 'en'){
      state.lang = 'fa'
    }else{
      state.lang = 'en'
    }
  },
  mouseEffectOn(state:any ){
    state.mouseEffect = true;
  },
  mouseEffectOff(state:any ){
    state.mouseEffect = false;
  },
}
