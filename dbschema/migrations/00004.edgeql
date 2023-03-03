CREATE MIGRATION m1rpkcibg6nq6s4ze2apkr6f4hijekm2xmkfauha6ykgki5cbxf6hq
    ONTO m1m47lpsogibnt5rbdhczajqm2hyxghgogt3ug67jbtrmhrjhumija
{
  ALTER TYPE default::Product {
      ALTER PROPERTY schema_computed_token {
          USING ((.token_amount IF (.show_token_amount = true) ELSE <std::int32>{}));
      };
  };
};
