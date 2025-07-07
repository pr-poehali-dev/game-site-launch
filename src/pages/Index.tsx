import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    {
      title: "Minecraft",
      description: "Строй, выживай и исследуй бесконечные миры",
      genre: "Песочница",
      players: "1-8 игроков",
      rating: 4.8,
      price: "₽1,299",
    },
    {
      title: "Terraria",
      description: "2D приключения с крафтом и боссами",
      genre: "Приключения",
      players: "1-4 игрока",
      rating: 4.7,
      price: "₽399",
    },
    {
      title: "Phasmophobia",
      description: "Кооперативная охота на призраков",
      genre: "Хоррор",
      players: "1-4 игрока",
      rating: 4.5,
      price: "₽699",
    },
  ];

  const news = [
    {
      title: "Новое обновление Minecraft 1.21",
      date: "5 дней назад",
      description: "Добавлены новые блоки и мобы",
    },
    {
      title: "Скидки на Terraria до 50%",
      date: "1 неделю назад",
      description: "Ограниченное предложение",
    },
    {
      title: "Хеллоуин ивент в Phasmophobia",
      date: "2 недели назад",
      description: "Новые карты и призраки",
    },
  ];

  const shopItems = [
    {
      name: "Minecraft Premium",
      price: "₽1,299",
      discount: "20%",
      image: "🎮",
    },
    {
      name: "Terraria Deluxe",
      price: "₽599",
      discount: "30%",
      image: "⚔️",
    },
    {
      name: "Phasmophobia + DLC",
      price: "₽999",
      discount: "15%",
      image: "👻",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="pixel-title text-accent retro-glow">
                PIXEL GAMES
              </h1>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="#games"
                className="pixel-font text-sm hover:text-accent transition-colors"
              >
                Игры
              </a>
              <a
                href="#news"
                className="pixel-font text-sm hover:text-accent transition-colors"
              >
                Новости
              </a>
              <a
                href="#shop"
                className="pixel-font text-sm hover:text-accent transition-colors"
              >
                Магазин
              </a>
              <Button className="pixel-button pixel-font">Войти</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-card to-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="pixel-title text-4xl md:text-6xl text-accent retro-glow mb-6">
            Добро пожаловать в мир
            <br />
            ретро-игр! 🕹️
          </h2>
          <p className="pixel-font text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Играй в лучшие инди-игры, следи за новостями и покупай игры со
            скидками
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="pixel-button pixel-font text-lg py-6 px-8">
              <Icon name="Gamepad2" className="mr-2" />
              Начать играть
            </Button>
            <Button
              variant="outline"
              className="pixel-font text-lg py-6 px-8 border-accent"
            >
              <Icon name="Download" className="mr-2" />
              Скачать игры
            </Button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="pixel-title text-2xl text-accent mb-8 text-center">
            🎮 Популярные игры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card
                key={index}
                className="pixel-border bg-card hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="pixel-font text-accent">
                      {game.title}
                    </CardTitle>
                    <Badge className="pixel-font text-xs bg-accent text-accent-foreground">
                      ⭐ {game.rating}
                    </Badge>
                  </div>
                  <CardDescription className="pixel-font text-sm">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between pixel-font text-sm">
                      <span>Жанр:</span>
                      <span className="text-accent">{game.genre}</span>
                    </div>
                    <div className="flex justify-between pixel-font text-sm">
                      <span>Игроки:</span>
                      <span className="text-accent">{game.players}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <span className="pixel-font text-lg text-accent">
                        {game.price}
                      </span>
                      <Button className="pixel-button pixel-font">
                        <Icon name="ShoppingCart" className="mr-2" size={16} />
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="pixel-title text-2xl text-accent mb-8 text-center">
            📰 Последние новости
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="pixel-font text-accent">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="pixel-font text-xs text-muted-foreground">
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="pixel-font text-sm">{item.description}</p>
                  <Button
                    variant="outline"
                    className="pixel-font mt-4 border-accent"
                  >
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="pixel-title text-2xl text-accent mb-8 text-center">
            🛒 Магазин
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopItems.map((item, index) => (
              <Card
                key={index}
                className="pixel-border bg-card hover:bg-muted/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{item.image}</div>
                  <CardTitle className="pixel-font text-accent">
                    {item.name}
                  </CardTitle>
                  <div className="flex justify-center items-center gap-2">
                    <Badge className="pixel-font text-xs bg-destructive text-destructive-foreground">
                      -{item.discount}
                    </Badge>
                    <span className="pixel-font text-lg text-accent">
                      {item.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="pixel-button pixel-font w-full">
                    <Icon name="ShoppingBag" className="mr-2" size={16} />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8 bg-accent/20 border-y border-accent">
        <div className="container mx-auto px-4 text-center">
          <p className="pixel-font text-accent retro-glow">
            🎯 Реклама: Скидки до 70% на все игры! Только до конца месяца!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="pixel-font text-accent mb-4">PIXEL GAMES</h4>
              <p className="pixel-font text-sm text-muted-foreground">
                Лучшие ретро-игры для настоящих геймеров
              </p>
            </div>
            <div>
              <h5 className="pixel-font text-accent mb-4">Игры</h5>
              <ul className="space-y-2 pixel-font text-sm text-muted-foreground">
                <li>Minecraft</li>
                <li>Terraria</li>
                <li>Phasmophobia</li>
              </ul>
            </div>
            <div>
              <h5 className="pixel-font text-accent mb-4">Поддержка</h5>
              <ul className="space-y-2 pixel-font text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="pixel-font text-accent mb-4">Соцсети</h5>
              <div className="flex gap-4">
                <Icon
                  name="Twitter"
                  className="text-accent hover:text-accent/80 cursor-pointer"
                />
                <Icon
                  name="Instagram"
                  className="text-accent hover:text-accent/80 cursor-pointer"
                />
                <Icon
                  name="Youtube"
                  className="text-accent hover:text-accent/80 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="pixel-font text-sm text-muted-foreground">
              © 2024 PIXEL GAMES. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
