CREATE MIGRATION m1h5xhs4imujqfzjctofqabledqcupx2uifpj4miww3lswdow25spa
    ONTO m1mogai6qqbmed5g6gpqysmfp66idzqcszzg5c6lnhclcdu5oxht5q
{
  ALTER TYPE default::Product {
      CREATE PROPERTY code -> std::str;
  };
};
