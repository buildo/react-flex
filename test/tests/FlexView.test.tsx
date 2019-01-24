import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as React from "react";
import * as renderer from "react-test-renderer";
import FlexView from "../../src";

describe("FlexView", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <FlexView vAlignContent="center" hAlignContent="right" grow shrink wrap>
        CONTENT
      </FlexView>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("build", () => {
  it("build script generates every needed file", () => {
    execSync("yarn build");
    expect(
      fs.readdirSync(path.resolve(__dirname, "../../lib"))
    ).toMatchSnapshot();
  });
});
