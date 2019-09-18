// //* Get Mouse Events
// let mouseX, mouseY;

// canvas.addEventListener("mousedown", e => {
//   if (
//     e.clientX > gameAreaCoords.w0 &&
//     e.clientY > gameAreaCoords.h0 &&
//     e.clientX < gameAreaCoords.w0 + gameAreaCoords.wMax &&
//     e.clientY < gameAreaCoords.h0 + gameAreaCoords.hMax
//   ) {
//     //* Detect mouse colision
//     let isInObstacle = obstacles.some(obstacle => obstacle.mouseIsIn(e.clientX, e.clientY));
//     if (canDrawMouseMove) {
//       if (!isInObstacle) {
//         mouseMove.addPosToHistory(e.clientX, e.clientY);
//         mouseMove.drawLine(mouseX, mouseY, e.clientX, e.clientY);
//       }
//       if (end.isMouseHere(e.clientX, e.clientY) || isInObstacle) {
//         canDrawMouseMove = false;
//         obstacles.forEach(obstacle => {
//           obstacle.setCanDraw(true);
//         });
//         redraw();
//         mouseMove.drawLineHistory();
//         var endTime = Date.now();
//         if (isInObstacle) {
//           console.log("GameOver");
//           console.log(endTime - mouseMove.startTime);
//         } else {
//           console.log("You pass this level");
//           console.log(endTime - mouseMove.startTime);
//         }
//       }
//     }
//   }
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });
