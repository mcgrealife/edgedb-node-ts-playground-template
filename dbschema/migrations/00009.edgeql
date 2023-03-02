CREATE MIGRATION m1afh3ybiez7nxlin25rejkrv4fb5n5gbzan26mfmc55n4srz7fahq
    ONTO m1h5xhs4imujqfzjctofqabledqcupx2uifpj4miww3lswdow25spa
{
  ALTER TYPE default::Product {
      DROP PROPERTY code;
  };
};
