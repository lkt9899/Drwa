package com.a708.drwa.game.data.dto.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class GameInfoCreateRequestDto {

    @NotNull
    @Size(max = 31)
    private String keyword;

    @NotNull
    private int mvpMemberId;
}