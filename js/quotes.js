const quotes = [
	{
		quote:
			'잭팟을 터트렸다고 말하는 사람들을 부러워해서는 안 된다. 이것이 성공적인 투자의 핵심이다.',
		author: '워렌버핏',
	},
	{
		quote:
			'주식시장은 적극적인 자에게서 참을성이 많은 자에게로 돈이 넘어가도록 설계되어 있다.',
		author: '워렌버핏',
	},
	{
		quote:
			'능력범위 안에 있는 기업만 평가할 수 있으면 된다. 능력범위의 크기는 중요하지 않다. 하지만 자신의 능력범위는 반드시 알아야 한다.',
		author: '워렌버핏',
	},
	{
		quote:
			'자본주의 시대에 인간은 여러가지 지적 수단을 발전시켜왔지만, 감정과 심리의 벽은 여전히 높기만 하다.',
		author: '워렌버핏',
	},
	{
		quote:
			'주식투자의 성공은 비밀 공식이나 컴퓨터 프로그램, 각 종목과 주식시장의 가격이 보내는 신호에 좌우되지 않는다. 그 보다는 주식시장의 전염성 강한 감정에 지배되지 않는 사고방식과 행동방식을 갖추고, 이와 더불어 훌륭한 판단력을 갖춘 투자자가 성공을 거둘 것이다.',
		author: '워렌버핏',
	},
	{
		quote:
			'좋은 회사는 선택하기 쉬운 의사결정들을 연속적으로 제시하는 반면에, 나쁜 회사는 계속해서 끔찍한 선택만을 제시하며 의사결정을 극도로 어렵게 만든다.',
		author: '워렌버핏',
	},
	{
		quote:
			'우리는 금융시장 전반을 분석하며, 이해할 수 있는 회사를 찾을 뿐이다. 그리고 그 회사들이 지속적인 경쟁력을 가지고 있는지, 신뢰할만한 경영진이 있는지, 가격이 합리적인지를 알아본다.',
		author: '워렌버핏',
	},
	{
		quote: '독점력을 구축했는지의 여부가 고수익을 보장해주는 열쇠가 된다.',
		author: '워렌버핏',
	},
	{
		quote:
			'평범한 지능을 갖추고 있다면 조바심을 절제할 수 있어야 한다. 조바심 때문에 많은 투자자들이 문제에 부딪힌다.',
		author: '워렌버핏',
	},
	{
		quote:
			'우리는 수익을 재투자해 늘어난 자본으로도 더 높은 수익을 올릴 수 있는 기업을 선호한다.',
		author: '워렌버핏',
	},
	{
		quote:
			'1911년에 가장 잘나가던 50개 기업 중에서 살아남는 것은 GE 하나 뿐이다. 경쟁자들의 공격이 얼마나 무서운 것인지 알 수 있다. 긴 세월에 걸쳐서 역사는, 어떤 기업이라 하더라도, 그 기업을 소유하고 있는 사람들이 원하는 대로 살아남을 수 있는 가능성은 결코 크지 않음을 보여주고 있다.',
		author: '찰리멍거',
	},
	{
		quote: '대중을 따라하는 것은 평균으로 후퇴하겠다는 말이다.',
		author: '찰리멍거',
	},
	{
		quote:
			'장기적으로 뛰어난 투자 성적을 얻으려면, 단기적으로 나쁜 성적을 견뎌내야 한다.',
		author: '찰리멍거',
	},
	{
		quote:
			'다른 이들은 더 똑똑하게 행동하려고 애쓰고 있지만, 나는 단지 바보가 되지 않을려고 노력할 뿐이다.',
		author: '찰리멍거',
	},
	{
		quote:
			'높은 지능은 자만심을 불러오는 원흉이다. 자신의 전문 분야가 아닌 것에 대해 섣불리 나서지 않고 사려깊게 행동한다면, 높은 지능은 투자자에게 강점이 될 것이다.',
		author: '찰리멍거',
	},
	{
		quote:
			'투자란 몇 군데 훌륭한 회사를 찾아내어 그저 엉덩이를 붙이고 눌러앉아 있는 것이다.',
		author: '찰리멍거',
	},
	{
		quote:
			'추가 하락이 두려워 좋은 가격의 기업을 포기한다면 장기적으로 아주 큰 댓가를 치를 것이다.',
		author: '피터린치',
	},
	{
		quote:
			'투자의 성공 여부는 얼마나 오랫동안 세상의 비관론을 무시할 수 있는지에 달려있다.',
		author: '피터린치',
	},
	{
		quote:
			'투자란 몇 군데 훌륭한 회사를 찾아내어 그저 엉덩이를 붙이고 눌러앉아 있는 것이다.',
		author: '피터린치',
	},
	{
		quote:
			'크게 성공한 투자자가 이렇게 말한 적이 있습니다. "약세론이 항상 지성적으로 들린다." 아침 신문을 읽을 때마다, 그리고 저녁 뉴스를 볼 때마다 우리는 주식을 내던지기 위한 그럴듯한 이유를 얼마든지 찾아낼 수 있습니다.',
		author: '피터린치',
	},
	{
		quote:
			'내가 엄청난 투자의 오류를 하나 고른다면, 그것은 주가가 오르면 자신이 투자를 잘 했다고 믿는 사고방식이다.',
		author: '피터린치',
	},
];

//quotes 부분 Ele 가져오기
const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');

const num = Math.floor(Math.random() * quotes.length);
console.log(`출력하는 인용구: ${num}`);

//선택된 인용구 Element에 넣어주기
quote.innerText = quotes[num].quote;
author.innerText = `-${quotes[num].author}`;
