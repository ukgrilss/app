import React from 'react';

// Componente para o cabeçalho do e-book
const Header = () => (
    <header className="text-center mb-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-800 mb-4 drop-shadow-lg animate-fade-in">Delícias Sem Glúten e Sem Lactose</h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-700 mb-8 animate-fade-in-delay-200">Receitas Saborosas para uma Vida Mais Leve</h2>
        <hr className="border-t-6 border-pink-400 w-32 mx-auto rounded-full shadow-lg" />
    </header>
);

// Componente para a introdução
const Introduction = () => (
    <section className="mb-12 p-6 bg-purple-50 rounded-xl shadow-lg border border-purple-200 text-lg leading-relaxed">
        <h3 className="text-3xl font-bold section-title mb-4">Introdução</h3>
        <p className="mb-4 text-gray-700">Bem-vindo(a) ao seu guia para uma culinária mais saudável e inclusiva! Este e-book foi carinhosamente preparado para quem busca <strong className="text-accent font-semibold">sabor</strong> e <strong className="text-accent font-semibold">bem-estar</strong> sem abrir mão do prazer de comer. Se você tem intolerância ao glúten ou à lactose, ou simplesmente deseja explorar uma alimentação mais leve e nutritiva, você veio ao lugar certo.</p>
        <p className="text-gray-700">Aqui, você encontrará receitas pensadas para o seu dia a dia, desde o café da manhã até a sobremesa, todas naturalmente livres de glúten e lactose. Prepare-se para descobrir que cozinhar sem esses ingredientes pode ser incrivelmente delicioso, criativo e fácil!</p>
    </section>
);

// Componente para as seções do livro
const SectionsList = () => (
    <section className="mb-12">
        <h3 className="text-3xl font-bold section-title mb-8 text-center">Seções do Livro</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <li className="bg-gradient-to-r from-purple-300 to-purple-400 text-purple-900 font-bold p-5 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">Café da Manhã Energizante</li>
            <li className="bg-gradient-to-r from-pink-300 to-pink-400 text-pink-900 font-bold p-5 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">Almoço e Jantar Nutritivos</li>
            <li className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900 font-bold p-5 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">Lanches e Petiscos Práticos</li>
            <li className="bg-gradient-to-r from-green-300 to-green-400 text-green-900 font-bold p-5 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">Sobremesas Irresistíveis</li>
            <li className="bg-gradient-to-r from-blue-300 to-blue-400 text-blue-900 font-bold p-5 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform cursor-pointer">Bônus: Acompanhamentos para Pães</li>
        </ul>
    </section>
);

// Componente genérico para uma receita
const RecipeCard = ({ title, description, ingredients, instructions, imageUrl }) => (
    <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-3xl transition-shadow duration-300">
        {/* Imagem da receita */}
        {imageUrl && (
            <div className="w-full sm:w-1/3 flex-shrink-0 relative group">
                <img
                    src={imageUrl}
                    alt={`Imagem de ${title}`}
                    className="w-full h-56 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/e0e0e0/000000?text=Imagem+N/A" }} // Fallback image
                />
                 <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Ver Receita</span>
                </div>
            </div>
        )}
        <div className="flex-grow">
            <h4 className="text-3xl font-bold recipe-title mb-4">{title}</h4>
            <p className="text-gray-700 mb-5 text-base">{description}</p>
            <h5 className="text-xl font-semibold text-pink-600 mb-3">Ingredientes:</h5>
            <ul className="list-disc list-inside text-gray-700 mb-5 text-sm space-y-1">
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h5 className="text-xl font-semibold text-pink-600 mb-3">Modo de Preparo:</h5>
            <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
                {instructions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    </div>
);

// Componente para a seção de Café da Manhã
const BreakfastSection = () => (
    <section className="mb-12">
        <h3 className="text-3xl font-bold section-title mb-8">1. Café da Manhã Energizante</h3>
        <p className="mb-8 text-gray-600 text-lg">Comece o seu dia com energia e sem preocupações com estas opções deliciosas.</p>

        <RecipeCard
            title="Panqueca de Banana (Sem Glúten e Sem Lactose)"
            description="Uma opção rápida e nutritiva para começar o dia."
            imageUrl="https://placehold.co/600x400/ffcc80/000000?text=Panqueca+de+Banana"
            ingredients={[
                "1 banana madura amassada",
                "1 ovo",
                "2 colheres de sopa de farinha de aveia (certificada sem glúten)",
                "1 colher de chá de fermento em pó",
                "Óleo de coco para untar",
                "Opcional: mel ou frutas para servir"
            ]}
            instructions={[
                "Em uma tigela, amasse a banana e adicione o ovo, misturando bem.",
                "Incorpore a farinha de aveia e o fermento em pó até obter uma massa homogênea.",
                "Aqueça uma frigideira antiaderente untada com um pouco de óleo de coco.",
                "Despeje pequenas porções da massa, formando as panquecas.",
                "Cozinhe por 2-3 minutos de cada lado, ou até dourarem.",
                "Servir com frutas frescas e um fio de mel, se desejar."
            ]}
        />

        <RecipeCard
            title="Smoothie Verde Revigorante"
            description="Cheio de nutrientes para um impulso matinal."
            imageUrl="https://placehold.co/600x400/c8e6c9/000000?text=Smoothie+Verde"
            ingredients={[
                "1 xícara de espinafre fresco",
                "1/2 banana congelada",
                "1/2 maçã picada",
                "1/2 xícara de água de coco",
                "1 colher de chá de sementes de chia",
                "Gelo a gosto (opcional)"
            ]}
            instructions={[
                "Coloque todos os ingredientes no liquidificador.",
                "Bata até obter uma consistência cremosa e homogênea.",
                "Sirva imediatamente."
            ]}
        />
    </section>
);

// Componente para a seção de Almoço e Jantar
const LunchDinnerSection = () => (
    <section className="mb-12">
        <h3 className="text-3xl font-bold section-title mb-8">2. Almoço e Jantar Nutritivos</h3>
        <p className="mb-8 text-gray-600 text-lg">Refeições completas e saborosas para o seu dia.</p>

        <RecipeCard
            title="Salmão Assado com Legumes"
            description="Uma refeição elegante e simples, rica em ômega-3."
            imageUrl="https://placehold.co/600x400/ff8a65/000000?text=Salmao+Legumes"
            ingredients={[
                "2 filés de salmão (cerca de 150g cada)",
                "1 abobrinha média, cortada em rodelas",
                "1 cenoura média, cortada em palitos",
                "1/2 pimentão vermelho, fatiado",
                "2 dentes de alho picados",
                "Suco de 1/2 limão",
                "2 colheres de sopa de azeite de oliva extra virgem",
                "Sal e pimenta-do-reino a gosto",
                "Alecrim fresco (opcional)"
            ]}
            instructions={[
                "Preaqueça o forno a 180°C.",
                "Em uma assadeira, coloque a abobrinha, a cenoura e o pimentão. Tempere com metade do azeite, sal, pimenta e alho. Misture bem.",
                "Disponha os filés de salmão sobre os legumes. Tempere o salmão com sal, pimenta e suco de limão. Regue com o restante do azeite e adicione o alecrim, se estiver usando.",
                "Leve ao forno por 20-25 minutos, ou até o salmão estar cozido e os legumes macios.",
                "Sirva quente."
            ]}
        />

        <RecipeCard
            title="Risoto de Abóbora com Leite de Coco"
            description="Um prato cremoso e reconfortante, totalmente sem lactose."
            imageUrl="https://placehold.co/600x400/ffb74d/000000?text=Risoto+Abobora"
            ingredients={[
                "1 xícara de arroz arbóreo",
                "2 xícaras de abóbora cabotiá picada",
                "1 cebola pequena picada",
                "2 dentes de alho picados",
                "1 litro de caldo de legumes caseiro (sem glúten)",
                "1/2 xícara de leite de coco culinário",
                "2 colheres de sopa de azeite de oliva",
                "Sal e pimenta-do-reino a gosto",
                "Salsinha fresca picada para finalizar"
            ]}
            instructions={[
                "Em uma panela média, aqueça o azeite e refogue a cebola e o alho até ficarem translúcidos.",
                "Adicione o arroz e refogue por 1 minuto.",
                "Acrescente a abóbora e comece a adicionar o caldo de legumes, uma concha por vez, mexendo constantemente. Espere o líquido ser absorvido antes de adicionar mais.",
                "Continue o processo por cerca de 20 minutos, ou até o arroz estar al dente e o risoto cremoso.",
                "Retire do fogo, adicione o leite de coco, o sal e a pimenta. Misture bem.",
                "Finalize com salsinha fresca picada e sirva imediatamente."
            ]}
        />
    </section>
);

// Componente para a seção de Lanches e Petiscos
const SnacksSection = () => (
    <section className="mb-12">
        <h3 className="text-3xl font-bold section-title mb-8">3. Lanches e Petiscos Práticos</h3>
        <p className="mb-8 text-gray-600 text-lg">Opções deliciosas para os intervalos das refeições.</p>

        <RecipeCard
            title="Bolinhos de Cenoura e Linhaça"
            description="Perfeitos para um lanche saudável e sem culpa."
            imageUrl="https://placehold.co/600x400/ffccbc/000000?text=Bolinhos+Cenoura"
            ingredients={[
                "1 xícara de farinha de arroz",
                "1/2 xícara de açúcar de coco ou xilitol",
                "1/4 xícara de sementes de linhaça moídas",
                "1 colher de chá de fermento em pó",
                "1/2 colher de chá de bicarbonato de sódio",
                "1 pitada de sal",
                "1 xícara de cenoura ralada fina",
                "1/2 xícara de leite vegetal (amêndoa, aveia, coco)",
                "1/4 xícara de óleo vegetal",
                "1 colher de chá de extrato de baunilha"
            ]}
            instructions={[
                "Preaqueça o forno a 180°C e prepare uma forma de muffins com forminhas de papel.",
                "Em uma tigela grande, misture a farinha de arroz, o açúcar de coco, a linhaça moída, o fermento, o bicarbonato e o sal.",
                "Em outra tigela, misture a cenoura ralada, o leite vegetal, o óleo vegetal e a baunilha.",
                "Despeje os ingredientes líquidos sobre os secos e misture delicadamente até incorporar (não misture em excesso).",
                "Divida a massa entre as forminhas de muffin, preenchendo até 2/3 da capacidade.",
                "Asse por 20-25 minutos, ou até dourar e um palito inserido no centro sair limpo.",
                "Deixe esfriar em uma grade antes de servir."
            ]}
        />
    </section>
);

// Componente para a seção de Sobremesas
const DessertsSection = () => (
    <section className="mb-12">
        <h3 className="text-3xl font-bold section-title mb-8">4. Sobremesas Irresistíveis</h3>
        <p className="mb-8 text-gray-600 text-lg">Doces que satisfazem o paladar sem glúten e sem lactose.</p>

        <RecipeCard
            title="Mousse de Chocolate e Abacate"
            description="Uma sobremesa cremosa, rica e surpreendentemente saudável."
            imageUrl="https://placehold.co/600x400/d7ccc8/000000?text=Mousse+Chocolate+Abacate"
            ingredients={[
                "1 abacate médio e maduro",
                "1/2 xícara de cacau em pó 100%",
                "1/4 xícara de xarope de bordo (maple syrup) ou agave",
                "1/4 xícara de leite vegetal (amêndoa, coco)",
                "1 colher de chá de extrato de baunilha",
                "Uma pitada de sal",
                "Frutas vermelhas ou raspas de chocolate sem lactose para decorar"
            ]}
            instructions={[
                "Coloque todos os ingredientes, exceto a decoração, em um processador de alimentos ou liquidificador potente.",
                "Processe até obter uma mistura completamente lisa e cremosa, raspando as laterais conforme necessário.",
                "Prove e ajuste o adoçante se desejar.",
                "Transfira para potes individuais e leve à geladeira por pelo menos 30 minutos para firmar.",
                "Decore com frutas vermelhas ou raspas de chocolate antes de servir."
            ]}
        />
    </section>
);

// Componente para a seção de Bônus: Acompanhamentos
const BonusSection = () => {
    const accompaniments = [
        {
            title: "Pasta de Abacate com Limão",
            description: "Uma pasta fresca e saudável, perfeita para um lanche rápido.",
            imageUrl: "https://placehold.co/600x400/a7ffeb/000000?text=Pasta+Abacate",
            ingredients: ["1 abacate maduro", "Suco de 1/2 limão", "Sal e pimenta a gosto"],
            instructions: ["Amasse o abacate com um garfo.", "Adicione o suco de limão, sal e pimenta. Misture bem e sirva."]
        },
        {
            title: "Homus Caseiro",
            description: "Creme de grão de bico delicioso e nutritivo.",
            imageUrl: "https://placehold.co/600x400/d1c4e9/000000?text=Homus",
            ingredients: ["1 xícara de grão de bico cozido", "2 colheres de sopa de tahine", "Suco de 1/2 limão", "1 dente de alho", "Água gelada (o suficiente para a consistência)", "Sal a gosto"],
            instructions: ["Bata todos os ingredientes no liquidificador ou processador até ficar cremoso. Adicione água gelada aos poucos para atingir a consistência desejada."]
        },
        {
            title: "Pesto de Manjericão (vegano)",
            description: "Um molho aromático e versátil, sem queijo.",
            imageUrl: "https://placehold.co/600x400/c5e1a5/000000?text=Pesto+Vegano",
            ingredients: ["1 xícara de folhas de manjericão fresco", "1/4 xícara de pinhões ou castanhas-de-caju", "2 dentes de alho", "1/2 xícara de azeite de oliva extra virgem", "Sal a gosto"],
            instructions: ["Bata o manjericão, pinhões/castanhas, alho e sal em um processador. Adicione o azeite em fio até obter uma pasta cremosa."]
        },
        {
            title: "Patê de Azeitonas Pretas (Tapenade)",
            description: "Saboroso e intenso, ideal para amantes de azeitonas.",
            imageUrl: "https://placehold.co/600x400/a1887f/000000?text=Tapenade",
            ingredients: ["1 xícara de azeitonas pretas sem caroço", "2 colheres de sopa de alcaparras", "1 dente de alho", "2 colheres de sopa de azeite de oliva", "Pimenta do reino a gosto"],
            instructions: ["Bata todos os ingredientes no processador até obter uma pasta rústica."]
        },
        {
            title: "Geleia de Frutas Vermelhas sem Açúcar",
            description: "Doce e natural, sem adição de açúcar.",
            imageUrl: "https://placehold.co/600x400/ef9a9a/000000?text=Geleia+Frutas+Vermelhas",
            ingredients: ["1 xícara de frutas vermelhas mistas (frescas ou congeladas)", "1 colher de sopa de sementes de chia", "Adoçante natural a gosto (opcional)"],
            instructions: ["Leve as frutas ao fogo baixo até amolecerem. Amasse levemente. Adicione as sementes de chia e o adoçante, se usar. Cozinhe por mais 5 minutos. Deixe esfriar para engrossar."]
        },
        {
            title: "Manteiga de Amendoim Natural",
            description: "Cremosa e energética, apenas com amendoim.",
            imageUrl: "https://placehold.co/600x400/ffe082/000000?text=Manteiga+Amendoim",
            ingredients: ["1 xícara de amendoim torrado sem pele e sem sal"],
            instructions: ["Bata o amendoim no processador por vários minutos, raspando as laterais, até virar uma manteiga cremosa."]
        },
        {
            title: "Cream Cheese Vegano com Ervas",
            description: "Uma alternativa deliciosa e sem lactose.",
            imageUrl: "https://placehold.co/600x400/b2dfdb/000000?text=Cream+Cheese+Vegano",
            ingredients: ["1 xícara de castanhas de caju (demolhadas)", "Água (o suficiente para bater)", "1 colher de chá de vinagre de maçã", "Ervas finas picadas (salsinha, cebolinha, orégano)", "Sal a gosto"],
            instructions: ["Bata as castanhas com a água e o vinagre até ficar liso e cremoso. Misture as ervas e o sal."]
        },
        {
            title: "Tomate Concassé com Azeite e Orégano",
            description: "Fresco e aromático, para um toque mediterrâneo.",
            imageUrl: "https://placehold.co/600x400/ffab91/000000?text=Tomate+Concassé",
            ingredients: ["2 tomates maduros (sem pele e sementes, picados)", "2 colheres de sopa de azeite de oliva", "Orégano a gosto", "Sal e pimenta do reino"],
            instructions: ["Misture todos os ingredientes e sirva imediatamente."]
        },
        {
            title: "Ovos Mexidos com Açafrão",
            description: "Colorido e saboroso, para um café da manhã diferente.",
            imageUrl: "https://placehold.co/600x400/fff59d/000000?text=Ovos+Açafrão",
            ingredients: ["2 ovos", "1 pitada de açafrão em pó", "Sal e pimenta a gosto", "Azeite para untar"],
            instructions: ["Bata os ovos com açafrão, sal e pimenta. Cozinhe em frigideira untada até o ponto desejado."]
        },
        {
            title: "Salada de Grão de Bico Temperada",
            description: "Leve e nutritiva, perfeita para sanduíches abertos.",
            imageUrl: "https://placehold.co/600x400/b3e5fc/000000?text=Salada+Grao+Bico",
            ingredients: ["1 xícara de grão de bico cozido", "1/4 xícara de cebola roxa picada", "1/4 xícara de pimentão picado", "Coentro ou salsinha picada", "Azeite, limão, sal e pimenta"],
            instructions: ["Misture todos os ingredientes. Amasse levemente parte do grão de bico para dar consistência."]
        },
        {
            title: "Cogumelos Salteados com Alho",
            description: "Sabor umami para seus pães.",
            imageUrl: "https://placehold.co/600x400/d7ccc8/000000?text=Cogumelos+Alho",
            ingredients: ["1 xícara de cogumelos fatiados", "2 dentes de alho picados", "1 colher de sopa de azeite", "Sal e pimenta"],
            instructions: ["Salteie os cogumelos em azeite com alho até dourarem. Tempere e sirva."]
        },
        {
            title: "Ricota de Castanhas com Pimenta do Reino",
            description: "Uma ricota vegana cremosa e picante.",
            imageUrl: "https://placehold.co/600x400/bcaaa4/000000?text=Ricota+Castanhas",
            ingredients: ["1 xícara de castanhas de caju (demolhadas)", "Água", "Vinagre de maçã", "Pimenta do reino moída na hora", "Sal"],
            instructions: ["Bata as castanhas com água, vinagre e sal até ficar homogêneo. Misture a pimenta e leve à geladeira."]
        },
        {
            title: "Cenoura Ralada com Passas e Maionese Vegana",
            description: "Um clássico repaginado e mais saudável.",
            imageUrl: "https://placehold.co/600x400/ffccbc/000000?text=Cenoura+Passas",
            ingredients: ["1 cenoura ralada", "2 colheres de sopa de passas", "2 colheres de sopa de maionese vegana"],
            instructions: ["Misture todos os ingredientes e sirva."]
        },
        {
            title: "Queijo de Castanhas Defumado",
            description: "Sabor defumado em uma pasta vegana.",
            imageUrl: "https://placehold.co/600x400/d8c1c4/000000?text=Queijo+Defumado",
            ingredients: ["1 xícara de castanhas de caju (demolhadas)", "Água", "Fumaça líquida (algumas gotas)", "Sal"],
            instructions: ["Bata as castanhas com água, fumaça líquida e sal até ficar cremoso. Refrigere."]
        },
        {
            title: "Guacamole Fresco",
            description: "O clássico mexicano perfeito para acompanhar.",
            imageUrl: "https://placehold.co/600x400/e0e0e0/000000?text=Guacamole",
            ingredients: ["1 abacate maduro", "1/4 cebola roxa picada", "1 tomate picado", "Coentro picado", "Suco de 1/2 limão", "Sal e pimenta"],
            instructions: ["Amasse o abacate e misture os demais ingredientes. Sirva fresco."]
        },
        {
            title: "Pasta de Berinjela (Babaganoush)",
            description: "Receita do Oriente Médio, rica em sabor.",
            imageUrl: "https://placehold.co/600x400/f0f4c3/000000?text=Babaganoush",
            ingredients: ["1 berinjela grande", "2 colheres de sopa de tahine", "Suco de 1/2 limão", "1 dente de alho", "Azeite, sal e pimenta"],
            instructions: ["Asse ou grelhe a berinjela até ficar macia. Retire a polpa e bata com os outros ingredientes."]
        },
        {
            title: "Patê de Atum com Maionese Vegana",
            description: "Uma versão sem lactose do tradicional patê de atum.",
            imageUrl: "https://placehold.co/600x400/b0bec5/000000?text=Pate+Atum",
            ingredients: ["1 lata de atum em água ou azeite (escorrido)", "3 colheres de sopa de maionese vegana", "Cebolinha picada", "Sal e pimenta"],
            instructions: ["Misture todos os ingredientes até obter uma pasta homogênea."]
        },
        {
            title: "Pasta de Grão de Bico com Beterraba",
            description: "Colorida e nutritiva, com um toque adocicado da beterraba.",
            imageUrl: "https://placehold.co/600x400/ef9a9a/000000?text=Pasta+Beterraba",
            ingredients: ["1 xícara de grão de bico cozido", "1/2 beterraba cozida", "2 colheres de sopa de tahine", "Suco de 1/2 limão", "Azeite, sal e pimenta"],
            instructions: ["Bata todos os ingredientes no processador até ficar cremoso e com cor vibrante."]
        },
        {
            title: "Manteiga de Coco",
            description: "Pura e cremosa, feita de coco.",
            imageUrl: "https://placehold.co/600x400/b2ebf2/000000?text=Manteiga+Coco",
            ingredients: ["1 xícara de coco ralado sem açúcar"],
            instructions: ["Bata o coco ralado no processador por 5-10 minutos, raspando as laterais, até virar uma manteiga cremosa."]
        },
        {
            title: "Doce de Leite Vegano",
            description: "Uma delícia doce e sem lactose para acompanhar.",
            imageUrl: "https://placehold.co/600x400/a1887f/000000?text=Doce+Leite+Vegano",
            ingredients: ["1 lata de leite de coco (parte sólida)", "1/2 xícara de açúcar de coco ou outro adoçante", "1 colher de chá de extrato de baunilha"],
            instructions: ["Misture todos os ingredientes em uma panela e cozinhe em fogo baixo, mexendo sempre, até engrossar e dourar."]
        },
        {
            title: "Pasta de Sementes de Girassol",
            description: "Alternativa nutritiva para quem não come amendoim.",
            imageUrl: "https://placehold.co/600x400/fff176/000000?text=Pasta+Girassol",
            ingredients: ["1 xícara de sementes de girassol (torradas)", "1-2 colheres de sopa de azeite (opcional)", "Sal a gosto"],
            instructions: ["Bata as sementes no processador até virar uma pasta. Adicione azeite, se necessário, para atingir a consistência desejada."]
        },
        {
            title: "Molho de Tomate Rústico",
            description: "Simples e saboroso, com pedaços de tomate.",
            imageUrl: "https://placehold.co/600x400/ef5350/000000?text=Molho+Tomate",
            ingredients: ["2 tomates maduros picados", "1 dente de alho picado", "Folhas de manjericão fresco", "Azeite de oliva", "Sal e pimenta"],
            instructions: ["Refogue o alho no azeite, adicione o tomate e cozinhe por alguns minutos. Tempere com sal, pimenta e manjericão."]
        },
        {
            title: "Abobrinha Grelhada com Azeite",
            description: "Leve e saborosa, com um toque defumado.",
            imageUrl: "https://placehold.co/600x400/a5d6a7/000000?text=Abobrinha+Grelhada",
            ingredients: ["1 abobrinha fatiada finamente", "Azeite de oliva", "Sal e pimenta do reino"],
            instructions: ["Grelhe as fatias de abobrinha em uma frigideira com azeite até ficarem macias e com marcas de grelha. Tempere."]
        },
        {
            title: "Sardella (Sem Laticínios)",
            description: "Um patê de sardinha intenso e picante, adaptado.",
            imageUrl: "https://placehold.co/600x400/b0bec5/000000?text=Sardella",
            ingredients: ["1 lata de sardinha em óleo (escorrida)", "1 pimentão vermelho assado (sem pele)", "1 dente de alho", "Azeite", "Pimenta calabresa (opcional)", "Sal"],
            instructions: ["Amasse a sardinha e misture com o pimentão picado, alho picado, azeite, pimenta calabresa e sal."]
        },
        {
            title: "Antepasto de Pimentão",
            description: "Colorido e agridoce, ótimo para entradas.",
            imageUrl: "https://placehold.co/600x400/ffcdd2/000000?text=Antepasto+Pimentao",
            ingredients: ["1 pimentão vermelho, 1 pimentão amarelo (fatiados)", "1 cebola fatiada", "Azeite, vinagre, açúcar", "Sal e orégano"],
            instructions: ["Refogue os pimentões e a cebola no azeite. Adicione o vinagre, açúcar, sal e orégano. Cozinhe até ficarem macios."]
        },
        {
            title: "Geleia de Pimenta",
            description: "Para quem gosta de um toque agridoce e picante.",
            imageUrl: "https://placehold.co/600x400/ff8a65/000000?text=Geleia+Pimenta",
            ingredients: ["2 pimentas dedo-de-moça (sem sementes)", "1 xícara de açúcar", "1/2 xícara de água", "2 colheres de sopa de vinagre"],
            instructions: ["Bata as pimentas com a água. Leve ao fogo com o açúcar e vinagre até engrossar. Coe se preferir uma geleia lisa."]
        },
        {
            title: "Patê de Brócolis",
            description: "Uma maneira saborosa de incluir brócolis na sua dieta.",
            imageUrl: "https://placehold.co/600x400/a5d6a7/000000?text=Pate+Brocolis",
            ingredients: ["1 xícara de brócolis cozido", "2 colheres de sopa de maionese vegana", "Sal e pimenta do reino"],
            instructions: ["Amasse o brócolis cozido e misture com a maionese vegana, sal e pimenta."]
        },
        {
            title: "Banana Fatiada com Canela",
            description: "Simples e doce, um clássico reconfortante.",
            imageUrl: "https://placehold.co/600x400/fff176/000000?text=Banana+Canela",
            ingredients: ["1 banana madura fatiada", "Canela em pó a gosto"],
            instructions: ["Fatie a banana e polvilhe generosamente com canela."]
        },
        {
            title: "Espinafre Refogado com Passas",
            description: "Combinação interessante de doce e salgado.",
            imageUrl: "https://placehold.co/600x400/c5e1a5/000000?text=Espinafre+Passas",
            ingredients: ["1 maço de espinafre", "2 colheres de sopa de passas", "1 dente de alho picado", "Azeite, sal e pimenta"],
            instructions: ["Refogue o alho no azeite, adicione o espinafre e as passas. Cozinhe até o espinafre murchar. Tempere."]
        },
        {
            title: "Manteiga de Cacau com um Toque de Sal",
            description: "Uma surpresa agridoce e cremosa.",
            imageUrl: "https://placehold.co/600x400/bcaaa4/000000?text=Manteiga+Cacau",
            ingredients: ["1/4 xícara de manteiga de cacau derretida", "1 colher de chá de cacau em pó 100%", "Adoçante a gosto", "Flor de sal (uma pitada)"],
            instructions: ["Misture a manteiga de cacau derretida com o cacau em pó e o adoçante. Adicione uma pitada de flor de sal. Deixe firmar levemente antes de servir."]
        }
    ];

    return (
        <section className="mb-12 bg-blue-50 rounded-2xl p-8 shadow-2xl border border-blue-200">
            <h3 className="text-3xl font-bold section-title mb-8 text-blue-700">BÔNUS: 30 Acompanhamentos para seus Pães</h3>
            <p className="mb-8 text-gray-700 text-lg">Explore uma variedade de sabores para transformar seus pães sem glúten e sem lactose em uma experiência deliciosa e inovadora.</p>
            {accompaniments.map((item, index) => (
                <RecipeCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    ingredients={item.ingredients}
                    instructions={item.instructions}
                    imageUrl={item.imageUrl}
                />
            ))}
        </section>
    );
};

// Componente para o rodapé
const Footer = () => (
    <footer className="text-center text-gray-600 text-sm py-8">
        <h3 className="text-2xl font-bold section-title mb-4">Conclusão</h3>
        <p className="mb-4 text-gray-700">Esperamos que este e-book seja um ponto de partida para muitas descobertas culinárias deliciosas e saudáveis em sua jornada sem glúten e sem lactose. Lembre-se que adaptar receitas é um processo divertido, e a criatividade é o seu melhor tempero!</p>
        <p className="font-semibold text-pink-600 mb-6 text-lg">Aproveite cada mordida e sinta a diferença que uma alimentação consciente pode fazer na sua vida!</p>
        <p className="text-xs italic mt-8 text-gray-500">
            <strong>Disclaimer:</strong> As informações e receitas contidas neste e-book são apenas para fins informativos e não substituem o aconselhamento de um profissional de saúde ou nutricionista. Sempre consulte um especialista antes de fazer grandes mudanças em sua dieta.
        </p>
    </footer>
);

// Componente principal do aplicativo React
function App() {
    return (
        <div className="gradient-background min-h-screen p-4 sm:p-8 text-gray-800">
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                .gradient-background {
                    background: linear-gradient(135deg, #fef08a, #fbcfe8, #d8b4fe); /* Cores vibrantes e suaves aprimoradas */
                }
                .section-title {
                    color: #c026d3; /* Roxo vibrante para títulos de seção */
                }
                .recipe-title {
                    color: #831843; /* Vinho mais profundo para títulos de receita */
                }
                .text-accent {
                    color: #ec4899; /* Rosa chiclete para destaque */
                }
                /* Animações CSS */
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
                .animate-fade-in-delay-200 {
                    animation: fadeIn 1s ease-out 0.2s forwards;
                }
                .animate-fade-in-delay-400 {
                    animation: fadeIn 1s ease-out 0.4s forwards;
                }
                `}
            </style>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-3xl p-6 sm:p-12 my-12">
                <Header />
                <Introduction />
                <hr className="border-t-2 border-purple-200 my-10" />
                <SectionsList />
                <hr className="border-t-2 border-purple-200 my-10" />
                <BreakfastSection />
                <hr className="border-t-2 border-purple-200 my-10" />
                <LunchDinnerSection />
                <hr className="border-t-2 border-purple-200 my-10" />
                <SnacksSection />
                <hr className="border-t-2 border-purple-200 my-10" />
                <DessertsSection />
                <hr className="border-t-2 border-purple-200 my-10" />
                <BonusSection />
                <hr className="border-t-2 border-purple-200 my-10" />
                <Footer />
            </div>
        </div>
    );
}

export default App;
