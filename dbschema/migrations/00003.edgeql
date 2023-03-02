CREATE MIGRATION m1a276co5zmfinw7vgpnkry7oilnki4wfepdzxbl6wd7tuzqza73wa
    ONTO m1ryj26azg3xcrcse6mfdqmecrxoxuqerizsk5k2tihaubhmmc55qq
{
  ALTER TYPE default::Product {
      ALTER LINK color {
          CREATE CONSTRAINT std::exclusive;
      };
      ALTER LINK size {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
