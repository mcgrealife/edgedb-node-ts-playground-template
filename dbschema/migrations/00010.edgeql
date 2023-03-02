CREATE MIGRATION m1isdztowkb4rjcvvpcmd3km3atyv7v74jyjdc3izw5y6m7z4oqlda
    ONTO m1afh3ybiez7nxlin25rejkrv4fb5n5gbzan26mfmc55n4srz7fahq
{
  ALTER TYPE default::Product {
      CREATE PROPERTY code -> std::str;
  };
};
