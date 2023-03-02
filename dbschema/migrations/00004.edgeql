CREATE MIGRATION m1pn5n4cw4vzyist7zcy7z3b4w5uefzy4qailnimkrpwtdslimkdza
    ONTO m1a276co5zmfinw7vgpnkry7oilnki4wfepdzxbl6wd7tuzqza73wa
{
  ALTER TYPE default::Color {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Product {
      ALTER LINK color {
          DROP CONSTRAINT std::exclusive;
      };
      ALTER LINK size {
          DROP CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Size {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
