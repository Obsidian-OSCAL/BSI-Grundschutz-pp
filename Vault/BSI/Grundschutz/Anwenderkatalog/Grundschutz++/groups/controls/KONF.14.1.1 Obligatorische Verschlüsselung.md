---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.1.1 Obligatorische Verschlüsselung
parent_control: KONF.14.1 Verschlüsselung beim Transport
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.1.1 - Obligatorische Verschlüsselung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

** Übergeordnetes Control: ** [KONF.14.1 Verschlüsselung beim Transport](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.14.1%20Verschlüsselung%20beim%20Transport.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.14%20Verteilte%20Anwendungen.md) *** | Anwendungen | SOLLTE | unverschlüsselte und anfällige Verbindungen | über Netze | deaktivieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE unverschlüsselte und anfällige Verbindungen über Netze deaktivieren.

> [!info]- Guidance
>Obligatorische Verschlüsselung bedeutet, dass die Anwendung ausschließlich nach dem Stand der Technik verschlüsselt kommuniziert. Unverschlüsselte oder mit bekannten Methoden angreifbare Verbindungsanfragen werden dagegen abgelehnt. Die Verwendung obligatorischer Verschlüsselung im Internet ist aktuell sehr uneinheitlich: Viele E-Mail-Server z.B. verschlüsseln im Auslieferungszustand nur opportunistisch - also nur wenn der Verbindungsaufbau so funktioniert. Das macht Verbindungen anfällig für Downgrade-Angriffe. Diese lassen sich verhindern, indem unverschlüsselte Verbindungen vollständig deaktiviert werden. Andererseits kann es dadurch auch zu Verbindungsproblemen mit Servern kommen, die überhaupt keine Verschlüsselung mit aktuellen Protokollen unterstützen. Für aktuelle Verschlüsselungsverfahren siehe BSI TR-02102.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b73c400e-b4f8-494c-ac02-619258f77a2d |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | b73c400e-b4f8-494c-ac02-619258f77a2d |
