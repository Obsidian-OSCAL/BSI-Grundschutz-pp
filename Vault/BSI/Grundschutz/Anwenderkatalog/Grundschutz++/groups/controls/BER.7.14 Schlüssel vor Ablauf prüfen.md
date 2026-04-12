---
tags:
- cryptography
- ber714-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.14 Schlüssel vor Ablauf prüfen
stmt_modal_verb: SOLLTE
stmt_action_word: überprüfen
stmt_documentation: Verzeichnis öffentlicher Schlüssel
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.14 - Schlüssel vor Ablauf prüfen
Tag: [[tags_Cryptography|Cryptography]]
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Schlüssel auf das baldige Auslaufen der Nutzungszeit | {{regelmäßig}} | [überprüfen](action_words_überprüfen_907e4ee6-6eb8-4160-902d-5b037f417e6a) | [Verzeichnis öffentlicher Schlüssel](documentation_guidelines_Verzeichnis öffentlicher Schlüssel) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung SOLLTE Schlüssel auf das baldige Auslaufen der Nutzungszeit {{ insert: param, ber.7.14-prm1 }} überprüfen.</span>

> [!info]- Guidance
>Wird die Gültigkeit von Schlüsseln vor dem Auslaufen nicht überwacht, so könnten Schlüssel ungültig werden, wodurch Schnittstellen oder Anwendungen plötzlich nicht mehr verfügbar sein könnten. Läuft ein Schlüssel bald ab, obwohl der Zweck weiterhin bestehen bleibt, so ist es sinnvoll den Schlüssel rechtzeitig durch einen neuen zu ersetzen. Hierbei ist zu beachten, dass bei Schlüsselwechsel verschlüsselte Daten entschlüsselt und erneut verschlüsselt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 681822fa-f526-4580-9436-7c7d4c94edf3 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 681822fa-f526-4580-9436-7c7d4c94edf3 |
