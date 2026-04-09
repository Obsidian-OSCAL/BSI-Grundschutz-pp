---
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.10.1 Grundkonfiguration für Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.10.1 - Grundkonfiguration für Anwendungen
Gruppe: [KONF.10 Konfiguration von Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.10.1.1 Versionierung der Anwendungskonfiguration](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.10.1.1%20Versionierung%20der%20Anwendungskonfiguration.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md) *** | Anwendungen | SOLLTE | eine Grundkonfiguration |  | dokumentieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE eine Grundkonfiguration dokumentieren.

> [!info]- Guidance
>Eine Grundkonfiguration (engl. baseline configuration) bezeichnet in diesem Kontext einen dokumentierten Ausgangszustand einer Anwendung, der sowohl funktionale Anforderungen als auch sicherheitsrelevante Einstellungen berücksichtigt. Sie umfasst unter anderem Parameter wie Benutzerrechte, Logging-Einstellungen, Schnittstellenaktivierungen oder Verschlüsselungsoptionen und bildet damit die Referenz, auf die spätere Anpassungen zurückgeführt oder überprüft werden können. Fehlt eine nachvollziehbare Grundkonfiguration, könnte es bei Updates, Migrationen oder im Incident-Fall zu schwer erkennbaren Abweichungen kommen, die unerwünschte Sicherheitslücken hinterlassen. Eine klare Dokumentation kann dagegen die Nachvollziehbarkeit erhöhen, unerwünschte Änderungen sichtbar machen und den sicheren Betrieb der Anwendung unterstützen. Zur praktischen Umsetzung kann die Institution eine dokumentierte Konfigurationsvorlage entwickeln, die sowohl Herstellerempfehlungen als auch anerkannte Empfehlungen des BSI oder aus Benchmarks wie die des Center for Internet Security (CIS) berücksichtigt. Die Sicherheit von Anwendungen ist in besonderem Maße kontextbezogen: So könnten z.B. über E-Mail oder Messenger hoch vertrauliche Daten ausgetauscht werden oder auch öffentliche Informationen. Daher ist hier eine Vertiefung der Risikoanalyse empfehlenswert, die sich an der Verwendung der Anwendungen in Geschäftsprozessen orientiert. Dabei besteht ein enger Bezug zu Compliance-Anforderungen, zum Beispiel an finanzielle Transaktionen oder den Datenschutz, je nachdem welche Datenverarbeitungen mit der Anwendung vorgenommen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 23571325-0e60-4d28-96e1-ed57f794f790 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 23571325-0e60-4d28-96e1-ed57f794f790 |
