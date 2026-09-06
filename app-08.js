const KAM_SHEET1='assets/portrait-sheet-1.webp';
const KAM_SHEET2='assets/portrait-sheet-2.webp';
KAM.sprite={
  izanagi:[KAM_SHEET1,0,0],
  izanami:[KAM_SHEET1,1,0],
  amaterasu:[KAM_SHEET1,2,0],
  tsukuyomi:[KAM_SHEET1,0,1],
  susanoo:[KAM_SHEET1,1,1],
  takamimusubi:[KAM_SHEET1,2,1],
  oshihomimi:[KAM_SHEET1,0,2],
  yorozuhata:[KAM_SHEET1,1,2],
  okuninushi:[KAM_SHEET1,2,2],
  ninigi:[KAM_SHEET2,0,0],
  oyamatsumi:[KAM_SHEET2,1,0],
  konohanasakuya:[KAM_SHEET2,2,0],
  hoori:[KAM_SHEET2,0,1],
  watatsumi:[KAM_SHEET2,1,1],
  toyotama:[KAM_SHEET2,2,1],
  ugaya:[KAM_SHEET2,0,2],
  tamayori:[KAM_SHEET2,1,2],
  jinmu:[KAM_SHEET2,2,2]
};

KAM.storyStep=0;KAM.beginner=[['まずは、一本の背骨だけ。','アマテラスから神武までの中心線を見ます。','imperial','amaterasu'],['次は、出雲側。','スサノオから大国主、国譲りへつながる流れです。','izumo','okuninushi'],['山と海が合流する。','瓊瓊杵尊から火遠理命へ進むと、山と海の系譜が皇統へ入ります。','merges','hoori'],['最後に全体。','ここまでの線を全部重ねると、日本神話の大きな骨格が見えてきます。','all','jinmu']];document.getElementById('storyNext').onclick=()=>{const s=KAM.beginner[KAM.storyStep];document.getElementById('storyTitle').textContent=s[0];document.getElementById('storyText').textContent=s[1];KAM.setView(s[2]);setTimeout(()=>KAM.selectGod(s[3]),80);KAM.storyStep=Math.min(KAM.storyStep+1,KAM.beginner.length-1);document.getElementById('storyNext').textContent=KAM.storyStep===KAM.beginner.length-1?'全体を見る':'次のポイント'};document.getElementById('storySkip').onclick=()=>KAM.setView('all');
const ob=KAM.openProfile;KAM.openProfile=function(g){ob(g);document.getElementById('profileBadge').textContent=g.group;document.getElementById('portraitBasis').innerHTML=KAM.termify('原典に確定した肖像が残るわけではありません。神格・物語・象徴をもとに学習用イメージとして再構成しています。');document.getElementById('portraitConfidence').textContent='容姿の確度：低／物語属性を視覚化'};
document.getElementById('__pageshare-free-plan-overlay')?.remove();
KAM.renderStoryMenu();KAM.renderClusters();KAM.render();KAM.fit();