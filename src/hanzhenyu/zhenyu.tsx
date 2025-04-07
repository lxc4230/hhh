import React, { useState } from 'react';
import styles from './Hanzhenyu.module.css';

interface CrewMember {
  id: number;
  name: string;
  nickname: string;
  position: string;
  bounty: string;
  background: string;
  image: string;
  joined: string;
  birthDate: string;
  age: string;
  height: string;
}

const Hanzhenyu: React.FC = () => {
  const strawHatCrew: CrewMember[] = [
    {
      id: 1,
      name: "蒙奇·D·路飞",
      nickname: "草帽路飞",
      position: "船长",
      bounty: "30亿贝里",
      background: "梦想成为海贼王。吃了橡胶果实的能力者，身体可以像橡胶一样伸缩。性格单纯，重视伙伴，拥有霸王色霸气。来自东海的风车村，爷爷是海军英雄卡普，父亲是革命军首领龙。",
      image: "https://th.bing.com/th/id/OIP.Al4Z0Fwmlfg15tAM0hUUQQHaKd?rs=1&pid=ImgDetMain",
      joined: "东海",
      birthDate: "5月5日",
      age: "19岁",
      height: "174cm"
    },
    {
      id: 2,
      name: "罗罗诺亚·索隆",
      nickname: "海贼猎人",
      position: "战斗员",
      bounty: "11亿1100万贝里",
      background: "梦想成为世界第一大剑豪。使用三刀流剑术，拥有强大的意志力和体力。曾是海贼猎人，后加入草帽一伙。与挚友古伊娜有过约定，要成为最强的剑士。",
      image: "https://bbsimg.talkop.com/forum/201911/25/134117xs48371ixoqn7ozo.jpg",
      joined: "东海",
      birthDate: "11月11日",
      age: "21岁",
      height: "181cm"
    },
    {
      id: 3,
      name: "娜美",
      nickname: "小贼猫",
      position: "航海士",
      bounty: "3亿6600万贝里",
      background: "梦想绘制全世界的航海图。精通气象学和航海术，能够感知天气变化。曾为拯救可可亚西村而被迫为阿龙工作，后被路飞解救。使用天候棒作为武器。",
      image: "https://th.bing.com/th/id/OIP.R-qeIannj_-SQGpsUnADHQHaKQ?rs=1&pid=ImgDetMain",
      joined: "东海",
      birthDate: "7月3日",
      age: "20岁",
      height: "170cm"
    },
    {
      id: 4,
      name: "乌索普",
      nickname: "狙击王",
      position: "狙击手",
      bounty: "5亿贝里",
      background: "梦想成为勇敢的海上战士。来自东海西罗布村，父亲是红发海贼团的狙击手耶稣布。擅长狙击和发明各种武器，虽然胆小但关键时刻非常可靠。",
      image: "https://5b0988e595225.cdn.sohucs.com/images/20180528/4577acac3b2047009bee5688231c6e46.jpg",
      joined: "东海",
      birthDate: "4月1日",
      age: "19岁",
      height: "176cm"
    },
    {
      id: 5,
      name: "文斯莫克·山治",
      nickname: "黑足",
      position: "厨师",
      bounty: "10亿3200万贝里",
      background: "梦想找到传说中的ALL BLUE。来自北海的文斯莫克家族，但厌恶家族的行为。精通踢技和厨艺，从不用手战斗以免伤害厨师的手。对女性非常绅士。",
      image: "https://pics0.photophoto.cn/29/882/29882510_2.jpg",
      joined: "东海",
      birthDate: "3月2日",
      age: "21岁",
      height: "180cm"
    },
    {
      id: 6,
      name: "托尼托尼·乔巴",
      nickname: "爱吃棉花糖的驯鹿",
      position: "船医",
      bounty: "1000贝里",
      background: "梦想成为能治愈任何疾病的医生。吃了人人果实的驯鹿，能说人话和理解人类情感。曾被同类和人类排斥，直到遇到Dr.希鲁鲁克。可以变身多种形态。",
      image: "https://pic16.photophoto.cn/20100728/0017029200361984_b.jpg",
      joined: "伟大航路",
      birthDate: "12月24日",
      age: "17岁",
      height: "90cm"
    },
    {
      id: 7,
      name: "妮可·罗宾",
      nickname: "恶魔之子",
      position: "考古学家",
      bounty: "9亿3000万贝里",
      background: "梦想解读历史正文，找到真正的历史。奥哈拉唯一的幸存者，8岁时就被悬赏7900万贝里。吃了花花果实的能力者，能在任何地方长出身体部位。",
      image: "https://bbsimg.talkop.com/forum/201911/25/134118qfcypxt8rno8mrcx.jpg",
      joined: "伟大航路",
      birthDate: "2月6日",
      age: "30岁",
      height: "188cm"
    },
    {
      id: 8,
      name: "弗兰奇",
      nickname: "铁人",
      position: "船匠",
      bounty: "3亿9400万贝里",
      background: "梦想看到自己造的船到达世界尽头。身体经过改造的改造人，擅长机械和造船。曾是水之都的拆船工，师从汤姆先生，建造了千里阳光号。",
      image: "https://th.bing.com/th/id/R.fe1fe4b51e56457db86b845dedf7cee7?rik=ACxnzjTU5X6tbA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180819%2f4f41347e2b044d9cbe4139710befc267.jpeg&ehk=kzVOuRTnimYerHGMH1MEBNeDBVyyziu%2f9ctlT3GFe9k%3d&risl=&pid=ImgRaw&r=0",
      joined: "伟大航路",
      birthDate: "3月9日",
      age: "36岁",
      height: "240cm"
    },
    {
      id: 9,
      name: "布鲁克",
      nickname: "灵魂之王",
      position: "音乐家",
      bounty: "3亿8300万贝里",
      background: "梦想与拉布重逢。吃了黄泉果能力的骷髅，死后灵魂回到身体而复活。曾是伦巴海贼团的音乐家，擅长小提琴和剑术。可以灵魂出窍。",
      image: "https://bbsimg.talkop.com/forum/201911/25/134110x72l3cwv484vyyvl.jpg",
      joined: "伟大航路",
      birthDate: "4月3日",
      age: "90岁",
      height: "277cm"
    },
    {
      id: 10,
      name: "甚平",
      nickname: "海侠",
      position: "舵手",
      bounty: "11亿贝里",
      background: "梦想见证鱼人族与人类的和平共处。原太阳海贼团船长，王下七武海之一。鱼人空手道大师，曾在顶上战争中帮助路飞。性格稳重，重视仁义。",
      image: "https://img.wumaow.org/upload/tu/132694296.jpg",
      joined: "新世界",
      birthDate: "4月2日",
      age: "46岁",
      height: "301cm"
    }
  ];

  const [selectedMember, setSelectedMember] = useState<CrewMember | null>(null);

  const handleMemberClick = (member: CrewMember) => {
    setSelectedMember(member);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>草帽一伙通缉令</h1>
        <p className={styles.subtitle}>点击成员查看详细信息</p>
      </header>

      <div className={styles.container}>
        <div className={styles.crewGrid}>
          {strawHatCrew.map((member) => (
            <div 
              key={member.id}
              className={`${styles.crewCard} ${selectedMember?.id === member.id ? styles.selected : ''}`}
              onClick={() => handleMemberClick(member)}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className={styles.wantedPoster}
                loading="lazy"
              />
              <h3 className={styles.crewName}>{member.name}</h3>
              <p className={styles.crewPosition}>{member.position}</p>
              <p className={styles.crewBounty}>悬赏金: {member.bounty}</p>
            </div>
          ))}
        </div>

        <div className={styles.detailsPanel}>
          {selectedMember ? (
            <div className={styles.memberDetails}>
              <h2 className={styles.memberTitle}>{selectedMember.name}</h2>
              <p className={styles.memberNickname}>别名: {selectedMember.nickname}</p>
              
              <div className={styles.infoGrid}>
                <div className={styles.infoColumn}>
                  <p><strong>职位:</strong> {selectedMember.position}</p>
                  <p><strong>悬赏金:</strong> {selectedMember.bounty}</p>
                  <p><strong>加入地点:</strong> {selectedMember.joined}</p>
                </div>
                <div className={styles.infoColumn}>
                  <p><strong>生日:</strong> {selectedMember.birthDate}</p>
                  <p><strong>年龄:</strong> {selectedMember.age}</p>
                  <p><strong>身高:</strong> {selectedMember.height}</p>
                </div>
              </div>
              
              <div className={styles.backgroundSection}>
                <h3 className={styles.sectionTitle}>人物背景</h3>
                <p className={styles.backgroundText}>{selectedMember.background}</p>
              </div>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>请从左侧选择一名草帽一伙成员</p>
              <p>查看他们的通缉令和详细信息</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hanzhenyu;