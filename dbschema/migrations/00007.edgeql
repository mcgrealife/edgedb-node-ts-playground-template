CREATE MIGRATION m1mogai6qqbmed5g6gpqysmfp66idzqcszzg5c6lnhclcdu5oxht5q
    ONTO m13zpb3ck7hcyuytm3qw3akz3s6uuqzkb3alhn64e736hyqhbdpmhq
{
  ALTER TYPE default::Product {
      CREATE PROPERTY name -> std::str;
  };
};
