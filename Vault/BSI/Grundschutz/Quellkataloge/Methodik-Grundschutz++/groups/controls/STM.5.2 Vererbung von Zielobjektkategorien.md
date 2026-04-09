---
class: BSI-Methodik-Grundschutz-plus-plus
type: control
control: STM.5.2 Vererbung von Zielobjektkategorien
---


** Control ** der Klasse "BSI-Methodik-Grundschutz-plus-plus"
# STM.5.2 - Vererbung von Zielobjektkategorien
Gruppe: [STM.5 Anforderungsmodellierung auf die Assets](BSI/Grundschutz/Quellkataloge/Methodik-Grundschutz++/groups/STM.5%20Anforderungsmodellierung%20auf%20die%20Assets.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Strukturmodellierung (STM)](BSI/Grundschutz/Quellkataloge/Methodik-Grundschutz++/groups/STM%20Strukturmodellierung.md)**<br> ***  &rarr; [Anforderungsmodellierung auf die Assets](BSI/Grundschutz/Quellkataloge/Methodik-Grundschutz++/groups/STM.5%20Anforderungsmodellierung%20auf%20die%20Assets.md) *** |  | MUSS | die Ergänzung der zuvor zugeordneten Zielobjektkategorien um diejenigen Kategorien | die in der Zielobjekthierarchie übergeordnet sind | ausführen |  | >Strukturmodellierung MUSS die Ergänzung der zuvor zugeordneten Zielobjektkategorien um diejenigen Kategorien die in der Zielobjekthierarchie übergeordnet sind ausführen.

> [!info]- Guidance
>Anforderungen werden einmalig für die passende Zielobjektkategorie definiert und dann auf alle nachgeordneten Kategorien vererbt. Durch die Vererbung wird es einfacher, den Umsetzungsstand und das Sicherheitsniveau über verschiedene Systeme und Anwendungen hinweg zu erfassen und zu vergleichen. Eine automatisierte Verarbeitung der Vererbungshierarchie kann auch der Umsetzungsaufwand in vielen Fällen erheblich reduzieren, ohne dass Themen außen vor bleiben. Die Vererbung erfolgt entlang der Zielobjekthierarchie: Für jedes zugeordnete Zielobjekt werden alle Elternknoten bis zur Wurzel einbezogen. Die Vererbung ist deterministisch, da die Zielobjekthierarchie fest definiert ist. Eine Automatisierung der Vererbung ist möglich und empfohlen, wenn die Hierarchie maschinenlesbar vorliegt. Beachten Sie, dass die Vererbung dazu führen kann, dass sich Zielobjektkategorien mehrfach ergeben; diese sind konsolidiert zu betrachten, um redundante Anforderungen zu vermeiden. Ergebnis dieses Schritts ist eine vollständige Liste der Zielobjektkategorie je Asset, bestehend aus direkt zugeordneten Zielobjektkategorien und vererbten übergeordneten Zielobjektkategorien. Dieses Set bildet die Grundlage für die Anforderungskonsolidierung und -ergänzung um die Anforderungen ohne Zielobjektkategorie.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3e96574e-7742-42c4-8ccb-4578bcc2f7b0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [0](effort_level_0) |> | ** Alternate Identifier ** | 3e96574e-7742-42c4-8ccb-4578bcc2f7b0 |

> [!info]- Links> > related: [STM.5.1 Modellierung der Anforderungen mit Zielobjekt](BSI/Grundschutz/Quellkataloge/Methodik-Grundschutz++/groups/controls/STM.5.1%20Modellierung%20der%20Anforderungen%20mit%20Zielobjekt.md)> > related: [STM.5.3 Konsolidierung und Redundanzprüfung](BSI/Grundschutz/Quellkataloge/Methodik-Grundschutz++/groups/controls/STM.5.3%20Konsolidierung%20und%20Redundanzprüfung.md)> > related: [STM.5.4 Modellierung der Anforderungen ohne Zielobjektkategorie](BSI/Grundschutz/Quellkataloge/Methodik-Grundschutz++/groups/controls/STM.5.4%20Modellierung%20der%20Anforderungen%20ohne%20Zielobjektkategorie.md)
