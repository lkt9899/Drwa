package com.a708.drwa.game.domain;

import com.a708.drwa.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Record {

    // PK
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recordId;

    // FK - member
    @ManyToOne(targetEntity = Member.class, fetch = FetchType.LAZY)
    @JoinColumn(name="member_id")
    private Member member;

    // FK - game_info
    @ManyToOne(targetEntity = GameInfo.class, fetch = FetchType.LAZY)
    @JoinColumn(name="game_id")
    private GameInfo gameInfo;

    // 승패 여부
    @Column(nullable = false, updatable = false, columnDefinition = "TINYINT")
    @Enumerated(EnumType.ORDINAL)
    private Result result;

    // 소속
    @Column(nullable = false, updatable = false, columnDefinition = "TINYINT")
    @Enumerated(EnumType.ORDINAL)
    Team team;

    @Builder
    public Record(Member member, GameInfo gameInfo, Result result, Team team) {
        this.member = member;
        this.gameInfo = gameInfo;
        this.result = result;
        this.team = team;
    }
}