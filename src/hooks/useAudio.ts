// TODO: make this better :))
export default function useAudio(id: string){
  const audio = document.getElementById(id);
  if(!audio){
    console.error("Audio node is not found in DOM");
  }
  else if(!(audio instanceof HTMLAudioElement)){
    console.error(`#time_is_up element is not a "HTMLAudioElement"`);
  }
  else{
    return {
      play: ()=>{
        audio.currentTime = 0;
        audio.play();
      },
      stop: ()=>{
        if(!audio.paused){
          audio.pause();
        }
      }
    }
  }
  return {
    play: ()=>{

    },
    stop: ()=>{

    }
  }
}