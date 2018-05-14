name := "serenityPOC"

version := "1.0"

scalaVersion := "2.11.11"


Keys.fork in Test := false

Keys.parallelExecution in Test := false

libraryDependencies ++= Seq(
<<<<<<< HEAD
  "org.seleniumhq.selenium" % "selenium-firefox-driver" % "3.11.0",
  "org.seleniumhq.selenium"%"selenium-java"%"3.6.0",
  "org.seleniumhq.selenium"%"htmlunit-driver"%"2.28.1",
  "org.scalatest"%"scalatest_2.11"%"2.2.1",
  "junit"%"junit"%"4.11"%"test",
  "com.novocode" % "junit-interface" % "0.11" % "test",
  "org.scala-lang" % "scala-library" % "2.11.11",
  "io.cucumber" % "cucumber-scala_2.11"%"2.0.1",
  "io.cucumber" % "cucumber-junit"%"2.4.0",
  "io.cucumber" % "gherkin" % "5.0.0",
  "io.cucumber" % "cucumber-jvm" % "2.4.0",
  "io.cucumber" % "cucumber-core" % "2.4.0",
  "net.serenity-bdd" % "serenity-core" % "1.9.12",
  "net.serenity-bdd" % "serenity-cucumber" % "1.9.5",
  "net.serenity-bdd" % "serenity-junit" % "1.9.12"
)

val myProject = (project in file(".")).enablePlugins(SerenitySbtPlugin)
=======
//  "net.serenity-bdd.maven.plugins" % "serenity-maven-plugin" % "1.9.12",
  "org.seleniumhq.selenium" % "selenium-firefox-driver" % "3.6.0",
"org.seleniumhq.selenium"%"selenium-java"%"3.6.0",
"org.seleniumhq.selenium"%"htmlunit-driver"%"2.28.1",
"org.scalatest"%"scalatest_2.11"%"2.2.1",
"org.pegdown"%"pegdown"%"1.1.0"%"test",
"info.cukes"%"cucumber-scala_2.11"%"1.2.2",
"info.cukes"%"cucumber-junit"%"1.2.2",
"info.cukes"%"cucumber-picocontainer"%"1.2.2",
"junit"%"junit"%"4.11"%"test",
"com.novocode" % "junit-interface" % "0.11" % "test",
  "org.scala-lang" % "scala-library" % "2.11.11",
  "org.scalaj"%%"scalaj-http"%"0.3.16",
  "info.cukes" % "gherkin" % "2.12.2",
  "info.cukes" % "cucumber-jvm" % "1.2.2",
  "info.cukes" % "cucumber-core" % "1.2.5"
//  "net.serenity-bdd" % "serenity-core" % "1.9.12",
//  "net.serenity-bdd" % "serenity-cucumber" % "1.9.5",
//  "net.serenity-bdd" % "serenity-jira-plugin" % "1.9.0",
//  "net.serenity-bdd" % "serenity-junit" % "1.9.12"
>>>>>>> 869512c04806da348d97e43a420e720726517bce

