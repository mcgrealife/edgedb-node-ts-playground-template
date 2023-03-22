CREATE MIGRATION m1xaxdg64gop4h2rdtrqhwwnut6qq2ovmzxiqd5turzamxpbfcsyca
    ONTO m13hp7p3plmp4wjgxzxfwj5pzutwoa5sjz5yc73g2vzmdkwd3g7cha
{
  ALTER TYPE default::Child {
      DROP PROPERTY name;
  };
  ALTER TYPE default::Parent {
      DROP LINK children;
  };
  DROP TYPE default::Child;
  ALTER TYPE default::Parent RENAME TO default::Person;
};
