---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.2 Authentizität von Nachrichten
stmt_target_object_category: Interpersonelle Kommunikation
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
result_reference: Authentizität
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.2 - Authentizität von Nachrichten
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

> [!example]- Untergeordnete Controls
> [KONF.13.2.1 Verifikation der Sendeberechtigung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.13.2.1%20Verifikation%20der%20Sendeberechtigung.md)> [KONF.13.2.2 Verifikation der Serversignatur](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.13.2.2%20Verifikation%20der%20Serversignatur.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Interpersonelle Kommunikation](target_object_categories_Interpersonelle Kommunikation_047aa523-6955-423d-924e-8376fb1d5722) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine automatische Verifikation der Authentizität von Nachrichten |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Interpersonelle Kommunikation SOLLTE eine automatische Verifikation der Authentizität von Nachrichten aktivieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Authentizität](result_Authentizität_00000000-0000-0000-0000-000000000000) | Eigenschaft, dass eine Entität das ist, was sie angibt zu sein. |

> [!info]- Guidance
>Die Authentizität von Nachrichten bezeichnet in diesem Zusammenhang die nachweisbare Echtheit und Unverfälschtheit einer digitalen Mitteilung im Rahmen der interpersonellen Kommunikation, also die Sicherheit, dass eine Nachricht tatsächlich von der angegebenen Quelle stammt und auf dem Übertragungsweg nicht manipuliert wurde. Im Fachjargon wird hier häufig von Message Authenticity oder auch von Origin Authentication gesprochen, wobei beide Begriffe eng mit kryptographischen Verfahren wie Digital Signatures oder Message Authentication Codes (MACs) verbunden sind. Der Sinn dieser Anforderung liegt darin, sicherzustellen, dass Angreifer keine falschen Identitäten vortäuschen oder den Inhalt von Nachrichten unbemerkt verändern können. Andernfalls könnte etwa eine gefälschte Anweisung in einem Chat zu Fehlhandlungen führen oder ein manipuliertes Dokument im E-Mail-Verkehr falsche Entscheidungen auslösen. Eine automatische Verifikation kann hingegen das Vertrauen in die Integrität und Herkunft der Kommunikation gewährleisten. Zur Umsetzung kann eine Institution beispielsweise digitale Signaturen einsetzen, die durch etablierte Standards wie S/MIME oder OpenPGP realisiert werden können, sodass E-Mail-Programme die Echtheit automatisch überprüfen. Auch der Einsatz von Ende-zu-Ende-Verschlüsselung mit eingebauter Authentizitätsprüfung, etwa bei Protokollen wie Signal Protocol oder TLS mit Client-Zertifikaten, kann eine geeignete Maßnahme sein. Darüber hinaus kann die Integration einer zentralen Public Key Infrastructure (PKI) oder die Nutzung verteilter Vertrauensmodelle (z. B. Web of Trust) sicherstellen, dass Schlüsselpaare zuverlässig verwaltet werden und Anwender ohne manuelle Prüfungen von Zertifikaten auskommen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 04eaf9de-736e-4dfc-898e-04dc85fa36f0 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 04eaf9de-736e-4dfc-898e-04dc85fa36f0 |
