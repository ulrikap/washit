import useWaitlist from "..//useWaitlist";
import { renderHook, act } from "@testing-library/react-hooks";
import { useEffect } from "react";

describe("useWaitlist.ts", () => {
  test("Can add users to waitlist", () => {
    const state = renderHook(() => useWaitlist());
    act(() => {
      state.result.current.addToWaitlist({
        lastName: "Ulrik",
        firstName: "Palmstroem",
        id: "0",
      });
      state.result.current.addToWaitlist({
        lastName: "Jon",
        firstName: "Palmstroem",
        id: "1",
      });
    });
    expect(state.result.current.waitList.length).toBe(2);
  });
  test("Can remove users from waitlist", () => {
    const state = renderHook(() => useWaitlist());
    act(() => {
      state.result.current.addToWaitlist({
        lastName: "Ulrik",
        firstName: "Palmstroem",
        id: "0",
      });
      state.result.current.addToWaitlist({
        lastName: "Jon",
        firstName: "Palmstroem",
        id: "1",
      });

      // Strange
      renderHook(() => {
        useEffect(() => {
          if (state.result.current.waitList.length == 2) {
            state.result.current.getNextUserFromWaitlist();
          }
        }, [state.result.current.waitList]);
      });
    });
    expect(state.result.current.waitList.length).toBe(1);
  });
});
