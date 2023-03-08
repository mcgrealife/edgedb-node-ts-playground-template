CREATE MIGRATION m1rmt7enyjye2cacbsq7yn3uikyxapic6ljrew5lsxrlqtcujbccja
    ONTO m1drpue4rcxt54vska3r3zoxdaqrwirmkzcxjtaubi7yygvzmhxe2a
{
  ALTER TYPE default::Parent {
      ALTER PROPERTY name {
          SET TYPE std::str USING ('test');
      };
  };
};
