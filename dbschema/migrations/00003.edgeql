CREATE MIGRATION m1m47lpsogibnt5rbdhczajqm2hyxghgogt3ug67jbtrmhrjhumija
    ONTO m1irkgoziswayw64l57jbmwjexwclyyprjtlvj3bbosy6koo2uwijq
{
  ALTER TYPE default::Product {
      CREATE PROPERTY schema_computed_token := ((.token_amount IF (.show_token_amount = true) ELSE 0));
  };
};
