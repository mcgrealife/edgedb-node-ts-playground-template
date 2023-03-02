CREATE MIGRATION m14astslfq5rzdw6yh3itgkjqa6odo5xi7btofohhcyrm4pzdj3l4q
    ONTO m1pn5n4cw4vzyist7zcy7z3b4w5uefzy4qailnimkrpwtdslimkdza
{
  CREATE TYPE default::B {
      CREATE PROPERTY name -> std::str;
  };
  CREATE TYPE default::A {
      CREATE MULTI LINK b -> default::B;
  };
};
